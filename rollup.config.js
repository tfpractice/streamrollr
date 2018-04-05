import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import json from "rollup-plugin-json";
import nodeResolve from "rollup-plugin-node-resolve";
import progress from "rollup-plugin-progress";
import replace from "rollup-plugin-replace";
import serve from "rollup-plugin-serve";
import uglify from "rollup-plugin-uglify";
import visualizer from "rollup-plugin-visualizer";

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

const output = [ es, cjs ];

const prod = process.env.NODE_ENV === `production`;

const repOpts = { ENV: JSON.stringify(process.env.NODE_ENV || `development`) };

const plugins = [
  json(),
  filesize(),
  nodeResolve(),
  commonjs(),
  visualizer({ filename: `dist/stats.html` }),
  progress({ clearLine: false }),
  replace(repOpts),
  prod && uglify(),
  babel({
    exclude: [ `node_modules/**` ],
    plugins: [ `external-helpers` ],
  }),
  serve({
    contentBase: [ `public` ],
    host: `localhost`,
    port: 3000,
    open: true,
    headers: { "Access-Control-Allow-Origin": `*` },
  }),
];

export default {
  input,

  output,
  plugins,
};
