const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
            enum: [
                "AI & Automation",
                "Software Engineering",
                "Data Intelligence",
                "Cloud & Devops"
            ],
        },

        description: {
            type: String,
            required: true,
        },

        features: [
            {
                type: String,
            },
        ],

        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Service", serviceSchema);

