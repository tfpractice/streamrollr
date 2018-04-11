import babelRoll from 'rollup-plugin-babel';
import builtinsRoll from 'rollup-plugin-node-builtins';
import commonjsRoll from 'rollup-plugin-commonjs';
import filesizeRoll from 'rollup-plugin-filesize';
import globalsNodeRoll from 'rollup-plugin-node-globals';
import jsonRoll from 'rollup-plugin-json';
import nodeResolveRoll from 'rollup-plugin-node-resolve';
import progressRoll from 'rollup-plugin-progress';
import replaceRoll from 'rollup-plugin-replace';
import serveRoll from 'rollup-plugin-serve';
import uglifyRoll from 'rollup-plugin-uglify';
import visualizerRoll from 'rollup-plugin-visualizer';

//
// /Generally, you need to ensure that rollup-plugin-replace goes before
// other things (like rollup-plugin-commonjs) in your plugins array, so
// that those plugins can apply any optimisations such as dead code removal.

const prod = process.env.NODE_ENV == `production`;

const ENV_KEY = `process.env.NODE_ENV`;

const replace = replaceRoll({ [ENV_KEY]: JSON.stringify(prod) });

const uglify = prod && uglifyRoll();

const resolve = nodeResolveRoll({
  jsnext: true,
  browser: true,
  preferBuiltins: true,
});

const babel = babelRoll({
  exclude: [`node_modules/**`],
  externalHelpers: true,
  plugins: [`external-helpers`],
});

const serve = serveRoll({
  contentBase: [`public`, `dist`],
  host: `localhost`,
  port: 3000,
  open: true,
  headers: { 'Access-Control-Allow-Origin': `*` },
});

const namedExports = {
  'material-ui/styles': [`createMuiTheme`, `MuiThemeProvider`],
  'prop-types': [`PropTypes`],

  react: [`React`, `cloneElement`, `createElement`, `Children`, `Component`],
};

const commonjs = commonjsRoll({
  include: [`node_modules/**`],
  namedExports,
});

const visualizer = visualizerRoll({ filename: `dist/stats.html` });

const progress = progressRoll({ clearLine: true });

const filesize = filesizeRoll();

export const cliPlugins = [
  jsonRoll(),
  replace,
  resolve,
  commonjs,
  babel,
  visualizer,
  progress,
  uglify,
  filesize,
  serve,
];

export const srvPlugins = [
  jsonRoll(),
  replace,
  resolve,
  commonjs,
  babel,
  visualizer,
  progress,
  uglify,
  filesize,
];
