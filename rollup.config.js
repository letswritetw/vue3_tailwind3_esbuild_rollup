// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import buble from '@rollup/plugin-buble';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  plugins: [
		nodeResolve(),
		commonjs(),
		buble({
			transforms: {
				forOf: false
			},
			exclude: 'node_modules/**'
		}),
		replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
			preventAssignment: true,
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15
    }),
		terser()
	],
  output: {
    file: 'dist/main.min.js',
    format: 'iife', // amd, cjs, esm, iife, umd
    sourcemap: false,
		name: 'vueApp'
  }
};