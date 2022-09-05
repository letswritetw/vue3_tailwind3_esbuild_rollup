// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import babelrc from 'babelrc-rollup';
import { babel } from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";

const babelrcOutput = babelrc({
	addExternalHelpersPlugin: false,
	exclude: 'node_modules/**',
	runtimeHelpers: false
});
babelrcOutput.babelHelpers = 'bundled';

export default {
  input: 'src/main.js',
  plugins: [
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
	],
  output: {
    file: 'dist/main.min.js',
    format: 'iife', // amd, cjs, esm, iife, umd
    sourcemap: false,
		name: 'app'
  }
};