import { Router } from "express";

const router = Router();

//create animal

router.post("/create", (req, res) => {
  res.send("Creating user...");
});

export default router;
