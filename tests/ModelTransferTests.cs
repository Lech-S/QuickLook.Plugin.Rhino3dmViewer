using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using QuickLook.Plugin.Rhino3dmViewer;

internal static class ModelTransferTests
{
    private static int passed;
    private static void Check(bool condition, string name)
    { if (!condition) throw new Exception(name); passed++; Console.WriteLine("PASS " + name); }
    public static int Main(string[] args)
    {
        try { Run(args[0]).GetAwaiter().GetResult(); Console.WriteLine("TOTAL " + passed); return 0; }
        catch (Exception ex) { Console.Error.WriteLine(ex); return 1; }
    }
    private static async Task Run(string folder)
    {
        Directory.CreateDirectory(folder);
        string path = Path.Combine(folder, "中文 传输测试.3dm");
        byte[] expected = new byte[ModelTransfer.ChunkBytes * 3 + 17];
        for (int i = 0; i < expected.Length; i++) expected[i] = (byte)((i * 31 + 17) % 256);
        File.WriteAllBytes(path, expected);
        using (var transfer = new ModelTransfer(path, "native-test"))
        {
            var received = new List<byte>();
            long offset = 0; int chunks = 0;
            while (offset < expected.Length)
            {
                var chunk = await transfer.ReadNextAsync(offset);
                byte[] data = Convert.FromBase64String(chunk.base64);
                Check(chunk.type == "modelChunk" && chunk.transferId == "native-test" && chunk.offset == offset, "chunk identity " + chunks);
                Check(data.Length <= ModelTransfer.ChunkBytes && chunk.total == expected.Length, "bounded chunk " + chunks);
                received.AddRange(data); offset += data.Length; chunks++;
                Check(chunk.done == (offset == expected.Length), "completion marker " + chunks);
            }
            Check(chunks == 4 && received.SequenceEqual(expected), "multi-chunk bytes are exact; Unicode path works");
        }
        using (var transfer = new ModelTransfer(path, "wrong-order"))
        {
            bool rejected = false;
            try { await transfer.ReadNextAsync(20); } catch (InvalidDataException) { rejected = true; }
            Check(rejected, "reject out-of-order read");
        }
        var cancelled = new ModelTransfer(path, "cancel"); cancelled.Dispose();
        bool cancellation = false;
        try { await cancelled.ReadNextAsync(0); } catch (ObjectDisposedException) { cancellation = true; }
        Check(cancellation, "cancelled transfer cannot read");
        bool missing = false;
        try { using (var t = new ModelTransfer(path + ".missing", "missing")) { } } catch (FileNotFoundException) { missing = true; }
        Check(missing, "missing file produces error");
        string empty = Path.Combine(folder, "empty.3dm"); File.WriteAllBytes(empty, new byte[0]);
        bool emptyRejected = false;
        try { using (var t = new ModelTransfer(empty, "empty")) { } } catch (IOException) { emptyRejected = true; }
        Check(emptyRejected, "empty file produces error");
    }
}
