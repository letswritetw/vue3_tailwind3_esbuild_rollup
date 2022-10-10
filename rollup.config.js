// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babelrc from 'babelrc-rollup';
import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
require('dotenv').config();

const babelrcOutput = babelrc({
	addExternalHelpersPlugin: false,
	exclude: 'node_modules/**',
	runtimeHelpers: false
});
babelrcOutput.babelHelpers = 'bundled';

const plugins = [
  nodeResolve({ browser: true }),
  commonjs(),
  babel(babelrcOutput),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true,
    __buildDate__: () => JSON.stringify(new Date()),
    __buildVersion: 15
  }),
  terser()
];

const entry = process.env.ENTRY.split(',');
const output = process.env.OUTPUT.split(',');

const resultArray = [];
for(let i in entry) {
  const item = {
    input: entry[i],
    plugins,
    output: {
      file: output[i],
      format: 'iife', // amd, cjs, esm, iife, umd
      sourcemap: false,
      name: 'app'
    }
  }
  resultArray.push(item);
}

export default resultArray;