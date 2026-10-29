// SPDX-License-Identifier: GPL-3.0-or-later
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace QuickLook.Plugin.Rhino3dmViewer
{
    // Transport only: no WPF/WebView2 dependency, so this code can be exercised separately.
    internal sealed class ModelTransfer : IDisposable
    {
        public const int ChunkBytes = 384 * 1024;
        public const long MaximumBytes = 512L * 1024 * 1024;
        private readonly FileStream stream;
        private readonly CancellationTokenSource cancellation = new CancellationTokenSource();
        private long nextOffset;
        private bool reading;
        private volatile bool disposed;
        public string Id { get; private set; }
        public long Length { get; private set; }

        public ModelTransfer(string path, string id)
        {
            Id = id;
            stream = new FileStream(path, FileMode.Open, FileAccess.Read,
                FileShare.ReadWrite | FileShare.Delete, 65536, true);
            Length = stream.Length;
            if (Length == 0 || Length > MaximumBytes)
            {
                stream.Dispose();
                throw new IOException("模型文件为空，或超过本版支持的 512 MB。");
            }
        }

        public async Task<ModelChunk> ReadNextAsync(long offset)
        {
            if (disposed) throw new ObjectDisposedException("ModelTransfer");
            if (reading) throw new InvalidOperationException("上一个模型分块尚未读取完成。");
            if (offset != nextOffset) throw new InvalidDataException("模型分块顺序不一致，请重新载入。");
            if (offset >= Length) throw new InvalidDataException("模型数据已经传输完成。");
            reading = true;
            CancellationToken ct = cancellation.Token;
            try
            {
                if (stream.Length != Length) throw new IOException("模型文件在预览期间发生变化，请重新载入。");
                int wanted = (int)Math.Min(ChunkBytes, Length - offset);
                byte[] buffer = new byte[wanted];
                int received = 0;
                while (received < wanted)
                {
                    int count = await stream.ReadAsync(buffer, received, wanted - received, ct).ConfigureAwait(false);
                    if (count == 0) throw new EndOfStreamException("模型文件未能完整读取，请确认文件已下载到本机。");
                    received += count;
                }
                ct.ThrowIfCancellationRequested();
                nextOffset += received;
                return new ModelChunk {
                    type = "modelChunk", transferId = Id, offset = offset, total = Length,
                    base64 = Convert.ToBase64String(buffer), done = nextOffset == Length
                };
            }
            finally { reading = false; }
        }

        public void Dispose()
        {
            if (disposed) return;
            disposed = true;
            cancellation.Cancel();
            stream.Dispose();
            cancellation.Dispose();
        }
    }

    internal sealed class ModelChunk
    {
        public string type;
        public string transferId;
        public long offset;
        public long total;
        public string base64;
        public bool done;
    }
}
