import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';

const entry = `src/index.js`;

const sourceMap = true;

const cjs = { file: `dist/bundle.cjs.js`, name: `streamrollr`, format: `cjs` };

const es = { file: `dist/bundle.es.js`, name: `streamrollr`, format: `es` };

const output = [ es, cjs ];

const plugins = [
  progress({ clearLine: false }),
  filesize(),
  nodeResolve(),
  commonjs(),
  babel({
    exclude: `node_modules/**`,
    plugins: [ `external-helpers` ],
  }),
  visualizer({ filename: `stats.html` }),
  replace({ ENV: JSON.stringify(process.env.NODE_ENV || `development`) }),
  process.env.NODE_ENV === `production` && uglify(),
];

export default {
  exports: `named`,
  entry,
  sourceMap,
  output,
  plugins,
};
