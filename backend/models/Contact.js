//Contact.js
import mongoose from "mongoose";
import validator from "validator";
const Contact =new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Name is required"],
        minLength: [3, "Name must contains atleast 3 letters"],
    },
    email:{
        type:String,
        required: [true,"Email is must"],
        validate:[validator.isEmail, "Invalid Email"],
    },
    subject:{
        type:String,
        required: [true,"Subject is required"],
        minLength: [5, "Subject should be >= 5 letters"],
    },
    message:{
        type:String,
        required: [true,"Enter your message"],
        minLength: [10, "Message can not be less than 10 letters"],
    },
    
});

export const Message= mongoose.model("Message", Contact);