// rollup.config.js
import terser from "@rollup/plugin-terser";
const dotenv = await import('dotenv');
dotenv.config();

const entry = process.env.ENTRY.split(',');
const output = process.env.OUTPUT.split(',');

const resultArray = [];
for(let i in entry) {
  const item = {
    input: entry[i],
    output: {
      file: output[i],
      format: 'iife', // amd, cjs, esm, iife, umd
      sourcemap: false,
      name: 'app',
      plugins: [terser()]
    }
  }
  resultArray.push(item);
}

export default resultArray;