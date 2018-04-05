import { Router } from "express";

import { streamTxt } from "./handlers";

const router = new Router();

router.get(`/`, streamTxt);

export default router;
