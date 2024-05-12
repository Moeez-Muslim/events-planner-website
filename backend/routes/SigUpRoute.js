import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/UserModel.js';
import { Credentials } from '../models/CredentialsModel.js';

const router = express.Router();

// POST route to create a new user
router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    const existingCredential = await Credentials.findOne({ email });

    if (existingUser || existingCredential) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      phoneNumber,
    });

    await newUser.save();

    // Create corresponding credential
    const newCredential = new Credentials({
      email,
      password: hashedPassword,
    });

    await newCredential.save();

    // Return success response
    res.status(201).json({
      message: 'User created successfully',
      userId: newUser._id,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE route to delete a user
router.delete('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { password } = req.body;

    // Validate password
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const credential = await Credentials.findOne({ email: user.email });
    if (!credential) {
      return res.status(404).json({ error: 'User credential not found' });
    }

    const passwordMatch = await bcrypt.compare(password, credential.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Delete user and credential
    await User.findByIdAndDelete(userId);
    await Credentials.findOneAndDelete({ email: user.email });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
