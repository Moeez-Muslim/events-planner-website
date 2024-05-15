import {Message} from "../models/Contact.js";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    try{
        const{ name, email,subject,message}=req.body;
        if(!name || !email || !subject || !message){
            return res.status(400).json({
                success:false,
                message: "All Fields are required ",
            });
    
        }
        await Message.create({ name,email,subject,message});
        res.status(200).json({
            success:true,
            message:" Message has been sent successfully!",
        });
    } catch(error) {
        return res.status(500).json({
            success:false,
            error,
        });
    }
})

router.get("/", async (request, response) => {
    return response.status(200).send({ message: "Login successful" });
})

export default router;