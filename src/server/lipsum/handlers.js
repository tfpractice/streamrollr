import { createReadStream } from "fs";
import { resolve } from "path";

const dir = resolve(__dirname, `../data`);

const getTxt = () => createReadStream(`${dir}/lipsum.txt`);

export const streamTxt = (req, res) => getTxt().pipe(res);
