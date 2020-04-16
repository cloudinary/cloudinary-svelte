import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name },
    { file: pkg.main.replace('.js','.min.js'), format: 'iife', name, plugins: [terser()]}
	],
	plugins: [
    resolve(),
    svelte(),
    commonjs({
      // We need this to be able to import Cloudinary from cloudinary-core,
      // because it is bundled as commonjs + named export.
      // Otherwise Rollup won't be able to import it.
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'cloudinary-core': ['Cloudinary']
      }
    })
	]
};
