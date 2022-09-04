# Vue3 + Tailwind CSS 3 + esbuild + rollup.js

---

## Files

**Config**

- .babelrc：編譯成 ES5 的檔案。
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