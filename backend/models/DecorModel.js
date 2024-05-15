import mongoose from "mongoose";

const decorSchema = new mongoose.Schema({
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

const Decor = mongoose.model('Decor', decorSchema);

module.exports = Decor;
