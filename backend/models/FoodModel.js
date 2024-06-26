import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

export const Food = mongoose.model('Food', foodSchema);