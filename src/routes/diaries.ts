import Express from "express"; // ESModules
// const express = require('express') -> commonjs

const router = Express.Router();

router.get("/", (_req: Express.Request, res: Express.Response) => {
  res.send("Fetching all entry diaries");
});

router.post("/", (_req: Express.Request, res: Express.Response) => {
  res.send("Saving a diary!");
});

export default router;
