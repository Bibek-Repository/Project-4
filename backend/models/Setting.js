const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema(
    {
        siteName: {
            type: String,
            default: "AI Solutions",
        },

        logo: {
            type: String,
            default: "",
        },

        timezone: {
            type: String,
            default: "Europe/London",
        },

        contactEmail: {
            type: String,
            default: "",
        },

        contactPhone: {
            type: String,
            default: "",
        },

        address: {
            type: String,
            default: "",
        },

        facebook: {
            type: String,
            default: "",
        },

        linkedin: {
            type: String,
            default: "",
        },

        twitter: {
            type: String,
            default: "",
        }
    },
    {
        timestamsp: true,
    }
);

module.exports = mongoose.model(
    "Setting",
    settingSchema
);