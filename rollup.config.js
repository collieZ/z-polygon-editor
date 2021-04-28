const os = require('os')
import pkjson from './package.json';
import filesize from 'rollup-plugin-filesize';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

const isDev = process.argv.splice(2).indexOf('--pub') < 0;
const prjName = pkjson.name
const ProjectName = 'ZMark'

const cpuCount = os.cpus().length || 1

const output = isDev ? { file: `build/${prjName}.js` } : { file: `build/${prjName}.js` };

export default {
  input: 'src/index.js',
  output: {
    ...output,
    format: 'umd',
    name: ProjectName,
    sourcemap: true
  },
  plugins: [
    nodeResolve(),
    commonjs({
      // include: "node_modules/babel-runtime",
      sourceMap: false,  // Default: true
    }),
    filesize(),
    babel({
      exclude: 'node_modules/**', // 只编译我们的源代码
      babelHelpers: 'runtime',
    }),
    terser({ numWorkers: cpuCount }),
  ],
}