import mongoose from "mongoose";

const decorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    }
});

export const Decor = mongoose.model('Decor', decorSchema);