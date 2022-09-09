const notifier = require('node-notifier');

const errorNotifier = err => {
  notifier.notify({
    title: '錯誤通知！',
    message: `${err.location.file}: ${err.text}`,
    sound: true
  });
  console.error('完整錯誤訊息：', err)
};

require('esbuild').build({
  entryPoints: ['./src/main.js'],
  outfile: './dist/main.min.js',
  bundle: true,
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
    message: "祝您有個美好的一天。\n點擊本通知可以進到 Let's Write 官網。",
    open: 'https://www.letswrite.tw/?utm_source=esbuild&utm_medium=node-notifier'
  });
});