import express from "express";
import { User } from "../models/UserModel.js";

const router = express.Router();

// Get all users
router.get("/", async (request, response) => {
  try {
    const users = await User.find({});
    return response.status(200).json({ count: users.length, data: users });
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Get a single user by ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const user = await User.findById(id);

    if (!user) {
      return response.status(404).send({ message: "User not found" });
    }

    return response.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Update a user
router.put("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updatedData = request.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    if (!updatedUser) {
      return response.status(404).send({ message: "User not found" });
    }

    return response.status(200).send({ message: "User updated successfully", data: updatedUser });
  } catch (error) {
    console.error(error.message);
    return response.status(500).send({ message: error.message });
  }
});




export default router;
