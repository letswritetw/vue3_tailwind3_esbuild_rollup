# Vue3 + Tailwind CSS 3 + dev: esbuild + build: rollup.js

Vue 3 + Tailwind CSS v3。

開發時用 esbuild，打包時用 rollup.js。

本專案說明文章：[Let's Write](https://www.letswrite.tw/vue-tailwind-esbuild-rollup/)

---

## Files

**Config**

- .babelrc：編譯成 ES5 的檔案。
- esbuild.config.js：esbuild 的設定檔。
- rollup.config.js：將 ./src/main.js 編譯成 ./dist/main.min.js 的設定檔。
- tailwind.config.js：Tailwind CSS 的設定檔。

**Develop**

- JS：`./src/main.js`
- CSS：`./src/tailwind.css`

**Production**

- JS：`./dist/main.min.js`
- CSS：`./dist/tailwind.min.css`

---

## Install

`npm install` 或 `yarn`

---

## Develop

JS：`npm run dev-js` 或 `yarn dev-js`。

Tailwind CSS：`npm run dev-tailwind` 或 `yarn dev-tailwind`。

---

## Production

JS + Tailwind CSS：`npm run build` 或 `yarn build`。

JS：`npm run build-js` 或 `yarn build-js`。

Tailwind CSS：`npm run build-tailwind` 或 `yarn build-tailwind`。