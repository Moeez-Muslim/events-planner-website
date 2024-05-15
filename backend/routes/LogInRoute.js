import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Credentials } from "../models/CredentialsModel.js";
import { User } from "../models/UserModel.js";

const router = express.Router();

// Route for login
router.post("/", async (request, response) => {
    try {
        const { email, password } = request.body;
        console.log("Received login request for email:", email);

        if (!email || !password) {
            console.log("Missing email or password");
            return response.status(400).send({ message: "email and password are required" });
        } 

        // Find user by email
        const user = await Credentials.findOne({ email });

        console.log("Found user:", user);

        if (!user) {
            console.log("User not found for email:", email);
            return response.status(401).send({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        console.log("Password correct?", isPasswordCorrect);

        if (!isPasswordCorrect) {
            console.log("Incorrect password for email:", email);
            return response.status(401).send({ message: "Invalid password" });
        }

        // Find user details
        const userDetail = await User.findOne({ email });
        console.log("User details:", userDetail);

        // Create a JWT token
        const token = jwt.sign(
            {
                userId: userDetail._id,
                email: userDetail.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h", // Set token expiration time
            }
        );

        console.log("Login successful for email:", email);

        return response.status(200).send({ token, message: "Login successful" });
    } catch (error) {
        console.error("Error occurred during login:", error);
        return response.status(500).send({ message: "Internal server error" });
    }
});

export default router;
