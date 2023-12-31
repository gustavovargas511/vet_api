import { Router } from "express";
import { Animal } from "../models/animal.model.js";
import { create } from "../controllers/animal.controller.js";

const router = Router();

//create animal

router.post("/create", create);

export default router;
