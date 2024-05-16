import express from 'express';
import { Decor } from "../models/DecorModel.js";

const router = express.Router();

// POST route to create a new decor item
router.post('/', async (req, res) => {
  try {
    const newDecor = await Decor.create(req.body);
    res.status(201).json(newDecor);
  } catch (error) {
    console.error('Error creating decor item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get all decor items
router.get('/', async (req, res) => {
  try {
    const decorItems = await Decor.find({});
    res.status(200).json(decorItems);
  } catch (error) {
    console.error('Error fetching decor items:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get a decor item by its ID
router.get('/:id', async (req, res) => {
  try {
    const decorItem = await Decor.findById(req.params.id);
    if (!decorItem) {
      return res.status(404).json({ error: 'Decor item not found' });
    }
    res.status(200).json(decorItem);
  } catch (error) {
    console.error('Error fetching decor item by ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE route to update a decor item by its ID
router.put('/:id', async (req, res) => {
  try {
    const updatedDecor = await Decor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedDecor) {
      return res.status(404).json({ error: 'Decor item not found' });
    }
    res.status(200).json(updatedDecor);
  } catch (error) {
    console.error('Error updating decor item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE route to delete a decor item by its ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedDecor = await Decor.findByIdAndDelete(req.params.id);
    if (!deletedDecor) {
      return res.status(404).json({ error: 'Decor item not found' });
    }
    res.status(200).json({ message: 'Decor item deleted successfully' });
  } catch (error) {
    console.error('Error deleting decor item:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
