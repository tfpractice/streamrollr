import axios from "axios";
import http from "http";
import { createReadStream, createWriteStream } from "fs";
import { Observable } from "rxjs";
import { resolve } from "path";
import { rxToStream, streamToStringRx } from "rxjs-stream";

const dir = resolve(__dirname, `../data`);

const FILE_ERR = `ENOENT`;

export const DOG_PATH = `${dir}/dogs.json`;

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

const logErr = e =>
  console.log(`========e========`, e, `========e========`) || e;

const checkErrCode = ({ code }) => code === FILE_ERR;

const onResponse = req => Observable.fromEvent(req, `response`);

const onData = res => Observable.fromEvent(res, `data`);

const getDogs = () => axios.get(DOG_URL);

const reqDogs = () => http.get(DOG_URL);

const writeDogs = () => createWriteStream(DOG_PATH).on(`error`, logErr);

const pipeDogs = src => src.pipe(writeDogs());

const retrieveDogs = () => onResponse(reqDogs()).subscribe(pipeDogs);

const noFileErr = e => logErr(e) && checkErrCode(e) && retrieveDogs();

const readDogs = () =>
  createReadStream(DOG_PATH, `utf8`).on(`error`, noFileErr);

onData(readDogs())
  .map(d => {
    console.log(`========d========`, d, `========d========`);
    return JSON.parse(d);
  })
  .subscribe(y => console.log(`y`, y));
export const streamDogs = (req, res) => readDogs().pipe(res);
