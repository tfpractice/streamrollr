import axios from "axios";
import http from "http";
import { createReadStream, createWriteStream } from "fs";
import { Observable } from "rxjs";
import { resolve } from "path";

const dir = resolve(__dirname, `../data`);

const FILE_ERR = `ENOENT`;

export const DOG_PATH = `${dir}/dogs.json`;

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

const onResponse = req => Observable.fromEvent(req, `response`);

const onData = res => Observable.fromEvent(res, `data`);

const getDogs = () => axios.get(DOG_URL);

const httDogs = () => http.get(DOG_URL);

const pipeDogs = src => src.pipe(writeDogs());

const retrieveDogs = () => onResponse(httDogs()).subscribe(pipeDogs);

const writeDogs = () =>
  createWriteStream(DOG_PATH).on(`error`, e => {
    console.log(`========e========`, e, `========e========`);
  });

const noFile = ({ code }) => code == FILE_ERR && writeDogs;

const readDogs = () =>
  createReadStream(DOG_PATH).on(`error`, e => {
    console.log(`========e========`, e, `========e========`);
  });

export const streamDogs = (req, res) => readDogs().pipe(res);
