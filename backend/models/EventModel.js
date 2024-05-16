import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue',
        required: true
    },
    decors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Decor'
    }],
    foodPackage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food',
        required: true
    }
});

export const Event = mongoose.model('Event', eventSchema);
