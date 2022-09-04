require('esbuild').build({
  entryPoints: ['./src/main.js'],
  outfile: './dist/main.min.js',
  bundle: true,
  sourcemap: true,
  watch: true,
}).then(result => {
  console.log(result);
  console.log(`watching ...`)
})