import axios from "axios";
import http from "http";
import * as RX from "rxjs";

const { Observable, Node } = RX;

// const { fromStream } = Node;

export const DOG_URL = `http://dog.ceo/api/breeds/list/all`;

export const getDogs = () =>
  axios.get(DOG_URL).then(x => console.log(`x`, x.data));

// console.log(`getDogs()`, getDogs());

//
// const hDogs = () => http.get(DOG_URL);

// console.log(`hDogs()`, hDogs());

//
// const onResponse = req => Observable.fromEvent(req, `response`);
//
// const onData = res => Observable.fromEvent(res, `data`);
//
// const resHand = res => {
//   console.log(`res`);
//   return res;
// };
//
// const dataHand = d => {
//   console.log(`d`, d);
// };
//
// console.log(`typeof hDogs()`, typeof hDogs());
//
// onResponse(hDogs()).subscribe(x => {
//   console.log(`x`, x);
//
//   return fromStream(x).subscribe(y => console.log(`y`, y));
// });
