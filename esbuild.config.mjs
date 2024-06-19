import * as esbuild from 'esbuild';
const dotenv = await import('dotenv');
dotenv.config();
const notifier = await import('node-notifier');

const entry = process.env.ENTRY.split(',');
let ctx = await esbuild.context({
  entryPoints: entry,
  bundle: true,
  minify: false,
  write: true,
  outdir: './dist/',
  outExtension: { '.js': '.min.js' },
  sourcemap: false,
  plugins: [
    {
      name: 'watch-error-notifier',
      setup(build) {
        build.onEnd(result => {
          if (result.errors.length > 0) {
            notifier.default.notify({
              title: '錯誤通知！',
              message: `${result.errors[0].location.file}: ${result.errors[0].text}`,
              sound: true
            });
          }
        })
      },
    },
  ],
});

const result = await ctx.rebuild();
if (result.errors.length <= 0) {
  notifier.default.notify({
    title: 'esbuild 啟動！',
    message: "Let's Write 祝您有個美好的一天。\n點擊本通知可以進到官網。",
    open: 'https://www.letswrite.tw/?utm_source=esbuild&utm_medium=node-notifier'
  });
}

await ctx.watch();