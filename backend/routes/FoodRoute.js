import express from 'express';
import {Food} from "../models/FoodModel.js"

const router = express.Router();

// POST route to create a new food item
router.post('/', async (req, res) => {
  try {
    const newFood = await Food.create(req.body);
    res.status(201).json(newFood);
  } catch (error) {
    console.error('Error creating food item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get all food items
router.get('/', async (req, res) => {
  try {
    const foods = await Food.find({});
    res.status(200).json(foods);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get a food item by its ID
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.status(200).json(food);
  } catch (error) {
    console.error('Error fetching food item by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE route to update a food item by its ID
router.put('/:id', async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.status(200).json(updatedFood);
  } catch (error) {
    console.error('Error updating food item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE route to delete a food item by its ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ error: 'Food item not found' });
    }
    res.status(200).json({ message: 'Food item deleted successfully' });
  } catch (error) {
    console.error('Error deleting food item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
