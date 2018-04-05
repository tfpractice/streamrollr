import { Router } from "express";

import { streamDogs } from "./handlers";

const router = new Router();

router.get(`/`, streamDogs);

export default router;
