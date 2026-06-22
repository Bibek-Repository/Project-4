const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        eventDate: {
            type: Date,
            required: true,
        },

        location: {
            type: String,
            required: true,
        },

        image: {
            type: String,
        },

        eventType: {
            type: String,
            enum: [
                "Workshop",
                "Conference",
                "Webinar",
                "Product Launch",
                "Training"
            ],
            default: "Workshop",
        },

        featured: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Event",
    eventSchema
);