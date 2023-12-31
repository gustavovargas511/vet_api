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

export const getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const animal = await Animal.findById(id);
    if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
    }
    return res.json(animal);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const remove = async (req, res) => {
    const { id } = req.params;
  try {
    const animal = await Animal.findByIdAndDelete(id);
    if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
    }
    return res.json({ message: 'Animal deleted successfully', animal });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const update = async (req, res) => {
    const { id } = req.params;
    const { name, com_name, species } = req.body;
  try {
    const animal = await Animal.findByIdAndUpdate(id, {name, com_name, species})
    if (!animal) {
        return res.status(404).json({ error: 'Animal not found' });
    }
    return res.json({ message: 'Animal updated successfully', animal });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};