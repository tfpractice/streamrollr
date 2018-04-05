import axios from 'axios';

// import http from 'http';

// import { Observable } from "rx";
import * as RX from 'rx';

const { Observable, Node } = RX;

const {
  fromCallback,
  fromNodeCallback,
  fromEvent,
  toEventEmitter,
  fromStream,
  fromReadableStream,
  fromWritableStream,
  fromTransformStream,
  writeToStream,
} = Node;

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

export const getDogs = () =>
  axios.get(DOG_URL).then(x => console.log(`x`, x.data));
