import express from 'express';
import { Event } from "../models/EventModel.js";

const router = express.Router();

// POST route to create a new event
router.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to get all events by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const events = await Event.find({ user: userId }).populate('venue decors foodPackage');
    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching events by user ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// UPDATE route to update an event by user ID and event ID
router.put('/:userId/:eventId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const eventId = req.params.eventId;
    const updatedEvent = await Event.findOneAndUpdate({ _id: eventId, user: userId }, req.body, { new: true }).populate('venue decors foodPackage');
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found for the given user ID' });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Error updating event by user ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE route to delete an event by user ID and event ID
router.delete('/:userId/:eventId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const eventId = req.params.eventId;
    const deletedEvent = await Event.findOneAndDelete({ _id: eventId, user: userId });
    if (!deletedEvent) {
      return res.status(404).json({ error: 'Event not found for the given user ID' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event by user ID:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
