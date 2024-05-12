import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Credentials} from "../models/CredentialsModel.js"
import { User } from "../models/UserModel.js";

const router = express.Router();

// Route for login
router.post("/", async (request, response) => {
    try {
        const { email, password } = request.body;
        console.log(email)

        if (!email || !password) {
            return response.status(400).send({ message: "email and password are required" });
        }

        // Find user by CNIC
        const user = await Credentials.findOne({ email });
        

        if (!user) {
            return response.status(401).send({ message: "Invalid email or password" });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return response.status(401).send({ message: "Invalid email or password" });
        }

        const user_userlist = await User.findOne({ email });
        console.log(user_userlist._id)
        // Create a JWT token
        const token = jwt.sign(
            {
                userId: user_userlist._id,
                email: user_userlist.email,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1h", // Set token expiration time
            }
        );

        return response.status(200).send({ token, message: "Login successful" });
    } catch (error) {
        console.error(error.message);
        return response.status(500).send({ message: "Internal server error" });
    }
});

export default router;
