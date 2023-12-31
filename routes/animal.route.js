import { Router } from "express";
import { Animal } from "../models/animal.model.js";

const router = Router();

//create animal

router.post("/create", (req, res) => {
  const user = Animal(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

export default router;
