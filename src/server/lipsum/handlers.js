import { createReadStream } from "fs";
import { resolve } from "path";

const dir = resolve(__dirname, `../data`);

const getTxt = () =>
  createReadStream(`${dir}/lipsum.txt`, e => {
    console.error(e);
  });

export const streamTxt = (req, res) => getTxt().pipe(res);
