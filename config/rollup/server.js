// import { dependencies } from '../../package.json';
import { cliPlugins as plugins } from './plugins';

// const external = Object.keys(dependencies);

const input = `src/index.js`;

const sourcemap = true;

const serverCJS = {
  sourcemap,
  file: `dist/client.bundle.cjs.js`,
  name: `streamrollr`,
  format: `cjs`,
};

const serverES = {
  sourcemap,
  file: `dist/client.bundle.es.js`,
  name: `streamrollr`,
  format: `es`,
};

const output = [serverCJS, serverES];

const server = {
  input,
  output,
  plugins,
  watch: { clearScreen: false },
};

export default server;
