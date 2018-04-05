import axios from "axios";
import bodyParser from "body-parser";
import express from "express";
import path from "path";

import { Routes as Dogs } from "../dogs";
import { Routes as Lorem } from "../lipsum";

const app = express();

app.use(bodyParser.json({ limit: `20mb` }));

app.use(bodyParser.urlencoded({ limit: `20mb`, extended: false }));

app.get(`/test`, (req, res) => {
  console.log(`text changed`);
  res.json({ tested: `tested` });
});
app.listen(3000, () => {
  console.log(`listening  on 3000`);
});

app.use(`/lorem`, Lorem);
app.use(`/dogs`, Dogs);

export default app;
