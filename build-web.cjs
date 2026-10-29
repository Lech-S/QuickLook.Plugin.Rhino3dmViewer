const path = require('path');
const fs = require('fs');
require('esbuild').buildSync({
  entryPoints: [path.join(__dirname, 'Assets/viewer.js')],
  bundle: true, format: 'esm', target: 'chrome120', minify: true,
  legalComments: 'eof', outfile: path.join(__dirname, 'Assets/viewer.bundle.js')
});
const destination = path.join(__dirname, 'Assets/rhino');
fs.mkdirSync(destination, { recursive: true });
for (const file of ['rhino3dm.js', 'rhino3dm.wasm'])
  fs.copyFileSync(require.resolve('rhino3dm/' + file), path.join(destination, file));
console.log('Offline web assets rebuilt.');
