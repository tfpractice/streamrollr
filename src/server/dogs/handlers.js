import axios from "axios";
import http from "http";
import { createReadStream, createWriteStream } from "fs";
import { Observable } from "rxjs";
import { resolve } from "path";

const dir = resolve(__dirname, `../data`);

export const DOG_PATH = `${dir}/dogs.json`;

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

export const getDogs = () => axios.get(DOG_URL);

const writeDogs = () => createWriteStream(DOG_PATH);

const readDogs = () => createReadStream(DOG_PATH);

const pipeDogs = src => src.pipe(writeDogs());

const hDogs = () => http.get(DOG_URL);

const onResponse = req => Observable.fromEvent(req, `response`);

const onData = res => Observable.fromEvent(res, `data`);

const wd = () => onResponse(hDogs()).subscribe(pipeDogs);

export const streamDogs = (req, res) => readDogs().pipe(res);
