import express from 'express';
import { Venue } from '../models/VenueModel.js';


const router = express.Router();

// POST route to create a new venue
router.post('/', async (req, res) => {
  try {
    const {
      title,
      imageURL,
      location,
      rating,
      suitedFor,
      reviews,
      costPerPerson,
      seatingCapacity,
    } = req.body;

    console.log('Received request to create a new venue:', req.body); // Debug statement

    // Create new venue
    const newVenue = new Venue({
      title,
      imageURL,
      location,
      rating,
      suitedFor,
      reviews,
      costPerPerson,
      seatingCapacity,
    });

    await newVenue.save();

    // Return success response
    res.status(201).json({
      message: 'Venue created successfully',
      venueId: newVenue._id,
    });
  } catch (error) {
    console.error('Error creating venue:', error); // Debug statement
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get all venues
router.get('/', async (req, res) => {
  try {
    const venues = await Venue.find({});
    return res.status(200).json({ count: venues.length, data: venues });
  } catch (error) {
    console.error('Error fetching venues:', error); // Debug statement
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get a single venue by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findById(id);

    if (!venue) {
      return res.status(404).json({ error: 'Venue not found' });
    }

    return res.status(200).json(venue);
  } catch (error) {
    console.error('Error fetching venue:', error); // Debug statement
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
