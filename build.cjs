// Bundles src/main.js + three.js (tree-shaken, local — no CDN) into game.js. Run: npm run build
// game.js is the single-player bundle. voice.js is a separate file fetched only after a co-op join.
require('esbuild').build({ entryPoints: { game: 'src/main.js', voice: 'src/voice.js' }, bundle: true, minify: true, format: 'esm', target: 'es2022', outdir: '.', legalComments: 'none', logLevel: 'info' }).catch(() => process.exit(1));
