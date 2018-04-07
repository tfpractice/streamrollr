import babel from "rollup-plugin-babel";
import builtins from "rollup-plugin-node-builtins";
import commonjs from "rollup-plugin-commonjs";

import filesize from "rollup-plugin-filesize";
import globals from "rollup-plugin-node-globals";
import json from "rollup-plugin-json";
import nodeResolve from "rollup-plugin-node-resolve";
import progress from "rollup-plugin-progress";
import replace from "rollup-plugin-replace";
import serve from "rollup-plugin-serve";
import uglify from "rollup-plugin-uglify";
import visualizer from "rollup-plugin-visualizer";
import configClient from "./config/client";
import { dependencies } from "./package.json";

//
const external = Object.keys(dependencies);

const input = `index.js`;

const sourcemap = true;

const cjs = {
  sourcemap,
  file: `dist/bundle.cjs.js`,
  name: `streamrollr`,
  format: `cjs`,
  exports: `none`,
};

const es = {
  sourcemap,
  file: `dist/bundle.es.js`,
  name: `streamrollr`,
  format: `es`,
  exports: `none`,
};

const clientOut = {
  // sourcemap,

  external: [ `react`, `rollup`, `react-proptypes` ],
  file: `dist/client.js`,
  name: `streamrollr`,
  format: `iife`,
};

const output = [ es, cjs ];

const prod = process.env.NODE_ENV === `production`;

const repOpts = { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || `development`) };

//
// const plugins = [
//   nodeResolve(),
//   replace(repOpts),
//   commonjs({
//     include: `node_modules/**`,
//
//     // exclude: [ `src/**`, `src/shared/**` ],
//   }),
//   json(),
//   babel({
//     exclude: [ `node_modules/**` ],
//     plugins: [ `external-helpers` ],
//   }),
//   visualizer({ filename: `dist/stats.html` }),
//
//   // progress({ clearLine: false }),
//   prod && uglify(),
//   filesize(),
//   serve({
//     contentBase: [ `public`, `dist` ],
//     host: `localhost`,
//     port: 3000,
//     open: true,
//     headers: { "Access-Control-Allow-Origin": `*` },
//   }),
// ];

const server = {
  input,
  output,
  plugins,
};

const client = {
  input: `src/client/index.js`,
  output: clientOut,
  plugins: [
    json(),

    globals(),
    builtins(),
    replace(repOpts),

    nodeResolve(),
    babel({
      exclude: [ `node_modules/**` ],
      plugins: [ `external-helpers` ],
    }),
    commonjs({
      // where to search for modules when you import them. if the
      // module path is not given explicitly, rollup will search
      // for them here.
      // include: `node_modules/**`,

      // ignoreGlobal: true,

      // this is where you patch modules that don't export their symbols
      // cleanly.
      namedExports: {
        // react appears to be one of those. Either that, or I'm not
        // importing it correctly in my code. Regardless this is an
        // example of telling rollup to extract the following symbols
        // from a package as if they were exported.
        "redux-logger": [ `createLogger` ],
        "react-dom": [ `default`, `render` ],
        react: [
          `cloneElement`,
          `createElement`,
          `PropTypes`,
          `Children`,
          `Component`,
        ],
      },
    }),

    // visualizer({ filename: `dist/stats.html` }),

    // progress({ clearLine: false }),

    prod && uglify(),
    filesize(),
    serve({
      contentBase: [ `public`, `dist` ],
      host: `localhost`,
      port: 3000,
      open: true,
      headers: { "Access-Control-Allow-Origin": `*` },
    }),
  ],

  // external,
};

// export default [ server, client ];

export default configClient;
