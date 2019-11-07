/* eslint @typescript-eslint/no-var-requires: "off" */

import path from 'path';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import ts from '@wessberg/rollup-plugin-ts';

/**
 * rollup setup:
 *
 *   - delete previously generated output
 *   - generate a commonjs and es module package
 *   - process css via postcss
 *   - delete generated typings except the one referenced in package
 */

const packageRoot = process.cwd();
const packageFile = require(path.join(packageRoot, '/package.json'));
const tsconfigPath = path.join(packageRoot, '../../tsconfig.json');
const isProductionMode = process.env.NODE_ENV === 'production';

export default {
  input: path.join(packageRoot, 'src/index.ts'),
  output: [
    {
      file: packageFile.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: !isProductionMode,
    },
    {
      file: packageFile.module,
      format: 'es',
      exports: 'named',
      sourcemap: !isProductionMode,
    },
  ],
  plugins: [
    del({
      targets: path.join(packageRoot, 'dist/*'),
      hook: 'buildStart',
    }),
    external(),
    postcss(),
    resolve({
      mainFields: ['module', 'main', 'browser'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      jail: 'src',
      preferBuiltins: false,
      dedupe: ['react', 'react-dom'],
    }),
    commonjs(),
    ts({
      tsconfig: tsconfigPath,
    }),
    del({
      // remove type declarations suffices with *.es.d.ts because they're
      // generated automatically with our es modules and commonjs output
      targets: [path.join(packageRoot, 'build/*.es.d.ts')],
      hook: 'writeBundle',
    }),
  ],
};
