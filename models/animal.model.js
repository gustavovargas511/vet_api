import { Schema, model } from "mongoose";

const animalSchema = new Schema({
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

export const Animal = model("Animal", animalSchema);
