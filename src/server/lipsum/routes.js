import Router from "express/lib/router";

import { streamTxt } from "./handlers";

const router = new Router();

router.get(`/`, streamTxt);

export default router;
