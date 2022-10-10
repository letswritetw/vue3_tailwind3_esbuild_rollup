const notifier = require('node-notifier');
require('dotenv').config();

const errorNotifier = err => {
  notifier.notify({
    title: '錯誤通知！',
    message: `${err.location.file}: ${err.text}`,
    sound: true
  });
  console.error('完整錯誤訊息：', err)
};

const entry = process.env.ENTRY.split(',');
require('esbuild').build({
  entryPoints: entry,
  bundle: true,
  write: true,
  outdir: './dist/',
  outExtension: { '.js': '.min.js' },
  sourcemap: true,
  watch: {
    onRebuild(error, result) {
      if (error) {
        errorNotifier(error.errors[0]);
      }
    },
  },
}).catch(error => {
  errorNotifier(error.errors[0]);
  process.exit(1);
}).then(result => {
  notifier.notify({
    title: 'esbuild 啟動！',
    message: "Let's Write 祝您有個美好的一天。\n點擊本通知可以進到官網。",
    open: 'https://www.letswrite.tw/?utm_source=esbuild&utm_medium=node-notifier'
  });
});