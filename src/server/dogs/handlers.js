import axios from "axios";
import http from "http";
import { createReadStream, createWriteStream } from "fs";
import { Observable } from "rxjs";
import { resolve } from "path";

const dir = resolve(__dirname, `../data`);

const writeDogs = dt =>
  console.log(`dt`, dt) || createWriteStream(`${dir}/dogs.json`);

const readDogs = () => createReadStream(`${dir}/dogs.json`);

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

export const getDogs = () =>
  axios.get(DOG_URL).then(x => console.log(`x`, x.data));

const hDogs = () => http.get(DOG_URL);

// console.log(`hDogs()`, hDogs());
//
const onResponse = req => Observable.fromEvent(req, `response`);

const onData = res => Observable.fromEvent(res, `data`);

onResponse(hDogs())
  .map(x0 => console.log(`x0`) || onData(x0))

  // .map(
  //   x1 => console.log(`x1`, x1) || x1.pipe(writeDogs())
  //
  //   // x1.subscribe(x2 => console.log(`x2`, x2) || x2.pipe(writeDogs()))
  // )
  .subscribe(y => console.log(`y`, y) || writeDogs(y));

//

// const writeDogs
