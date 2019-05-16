import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json')
const extensions = ['.js', '.jsx', '.tsx', '.ts']

export default {
  input: 'src/aas.ts',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,

      plugins: ['@babel/plugin-proposal-class-properties'],
      extensions,
    }),
    json(),
    resolve({
      browser: true,
      extensions,
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: true,
      clean: true
    }),
  ],
}
