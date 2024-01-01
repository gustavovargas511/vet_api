import { Animal } from "../models/animal.model.js";

export const create = async (req, res) => {
  //console.log(req.body);
  const { name, com_name, species } = req.body;
  //res.json({ok: true})
  try {
    const animal = new Animal({ name, com_name, species });
    await animal.save();
    return res.json({ inserted: true });
  } catch (error) {
    console.log(error);
  }
};

export const getAll = async (req, res) => {
  try {
    const animal = await Animal.find({});
    return res.json(animal);
  } catch (error) {
    console.log(error);
  }
};
