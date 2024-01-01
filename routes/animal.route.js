import { Router } from "express";
import { Animal } from "../models/animal.model.js";
import { create, getAll, getOne } from "../controllers/animal.controller.js";

const router = Router();

//create animal
router.post("/create", create);

//get all animals
router.get("/getAll", getAll);

//get one animal
router.get("/getOne/:id", getOne);

export default router;
