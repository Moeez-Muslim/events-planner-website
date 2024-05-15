const mongoose = require('mongoose');


const venueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    suitedFor: [{
        type: String
    }],
    reviews: [
        {
            giverName: {
                type: String,
                required: true
            },
            feedbackText: {
                type: String,
                required: true
            }
        }
    ],
    costPerPerson: {
        type: Number,
        min: 0
    },
    seatingCapacity: {
        type: Number,
        min: 0
    }
});

export const Venue = mongoose.model('Venue', venueSchema);

