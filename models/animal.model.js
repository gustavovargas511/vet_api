import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  com_name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
});

export const Animal = mongoose.model("Animal", animalSchema);
