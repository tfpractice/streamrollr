import { cliPlugins as plugins } from './plugins';

// /Generally, you need to ensure that rollup-plugin-replace goes before
// other things (like rollup-plugin-commonjs) in your plugins array, so
// that those plugins can apply any optimisations such as dead code removal.
const input = `src/client/index.js`;

const sourcemap = true;

const external = [`react`, `react-dom`];

const globals = {
  react: `React`,
  React: `react`,
  'react-dom': `ReactDOM`,
  'prop-types': `PropTypes`,
  invariant: `invariant`,
};

const output = {
  // globals,
  sourcemap,
  file: `dist/client.js`,
  name: `streamrollr`,
  format: `iife`,
};

const client = {
  input,
  output,
  plugins,
  watch: { clearScreen: false },
};

export default client;
