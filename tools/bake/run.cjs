// node tools/bake/run.cjs  -> assets/zombies.bin, assets/cars.bin
const fs = require('fs'), path = require('path'), http = require('http');
require('esbuild').buildSync({ entryPoints: [__dirname + '/bake.js'], bundle: true, format: 'iife', outfile: '/tmp/bake.bundle.js', logLevel: 'error' });
const srv = http.createServer((q, r) => { if (q.url.includes('bundle')) { r.setHeader('content-type', 'text/javascript'); r.end(fs.readFileSync('/tmp/bake.bundle.js')); } else { r.setHeader('content-type', 'text/html'); r.end('<script src="/bundle.js"></script>'); } }).listen(8133);
(async () => { const { chromium } = require('playwright'); const b = await chromium.launch(); const p = await b.newPage(); p.setDefaultTimeout(900000); p.on('pageerror', (e) => console.log('ERR', e.message));
  await p.goto('http://localhost:8133/'); await p.waitForFunction(() => document.title === 'ready'); const r = await p.evaluate(() => window.bake());
  const out = path.join(__dirname, '../../assets'); fs.mkdirSync(out, { recursive: true }); fs.writeFileSync(out + '/zombies.bin', Buffer.from(r.z, 'base64')); fs.writeFileSync(out + '/cars.bin', Buffer.from(r.c, 'base64'));
  console.log(r.log.join('\n')); await b.close(); srv.close(); })();
