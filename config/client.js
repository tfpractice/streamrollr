import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import globalsNode from 'rollup-plugin-node-globals';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';

const input = `src/client/index.js`;

const sourcemap = true;

const external = [`react`, `rollup`, `react-dom`];

const globals = {
  react: `React`,
  'react-dom': `ReactDOM`,
  'prop-types': `PropTypes`,
  invariant: `invariant`,
};

const output = {
  globals,
  sourcemap,
  file: `dist/client.js`,
  name: `streamrollr`,
  format: `iife`,
};

const prod = process.env.NODE_ENV === `production`;

const rePlug = replace({'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || `production`),});

const babelPlug = babel({
  exclude: [`node_modules/**`],
  plugins: [`external-helpers`],
});

const srvPlug = serve({
  contentBase: [`public`, `dist`],
  host: `localhost`,
  port: 3000,
  open: true,
  headers: { 'Access-Control-Allow-Origin': `*` },
});

const namedExports = {
  'material-ui/styles': [`createMuiTheme`],
  'prop-types': [`PropTypes`],

  react: [`cloneElement`, `createElement`, `Children`, `Component`],
};

const cjsPlug = commonjs({
  include: [`node_modules/**`],
  namedExports,
});

const plugins = [
  json(),

  rePlug,

  nodeResolve({
    jsnext: true,
    browser: true,
  }),
  cjsPlug,
  babelPlug,

  visualizer({ filename: `dist/stats.html` }),
  progress({ clearLine: false }),
  filesize(),
  srvPlug,
];

const client = {
  input,
  output,
  plugins,
  external,
};

export default client;
