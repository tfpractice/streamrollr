// import express, { Router } from "express";
import Router from "express/lib/router";

// console.log(`Router`, RT);

// console.log(`express`, express);
import { streamDogs } from "./handlers";

const router = new Router();

router.get(`/`, streamDogs);

export default router;
