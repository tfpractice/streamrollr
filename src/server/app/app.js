import axios from 'axios';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';

import resText from './html';
import { Routes as Dogs } from '../dogs';
import { Routes as Lorem } from '../lipsum';

const app = express();

const logReq = (req, res, next) => {
  console.log(`req.url`, req.url);
  next();
};

app.use(bodyParser.json({ limit: `20mb` }));
app.use(bodyParser.urlencoded({ limit: `20mb`, extended: false }));
app.use(logReq);

console.log(`path.resolve(`, path.resolve(`dist`));
app.get(`/test`, (req, res) => {
  console.log(`req.url`, req.url);
  res.json({ tested: `tested` });
});
const pub = path.resolve(`.`, `public/index.html`);

console.log(`pub`, pub);
app.get(`/`, (req, res) => {
  console.log(`text changed`);
  console.log(`title`);
  res.send(resText);
});
app.listen(3000, () => {
  console.log(`listening  on 3000`);
});

app.use(`/lorem`, Lorem);
app.use(`/dogs`, Dogs);
app.use(express.static(`public`));
app.use(express.static(`dist`));
export default app;
