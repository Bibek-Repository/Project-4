const mongoose = require("mongoose");

const siteSettingsSchema = new mongoose.Schema({

    companyName: {
        type: String,
        default: "AI Solutions"
    },

    tagline: {
        type: String,
        default: ""
    },

    about: {
        type: String,
        default: ""
    },

    logo: {
        type: String,
        default: ""
    },

    favicon: {
        type: String,
        default: ""
    },

    email: {
        type: String,
        default: ""
    },

    phone: {
        type: String,
        default: ""
    },

    whatsapp: {
        type: String,
        default: ""
    },

    address: {
        type: String,
        default: ""
    },

    googleMap: {
        type: String,
        default: ""
    },

    facebook: {
        type: String,
        default: ""
    },

    instagram: {
        type: String,
        default: ""
    },

    linkedin: {
        type: String,
        default: ""
    },

    twitter: {
        type: String,
        default: ""
    },

    youtube: {
        type: String,
        default: ""
    },

    footerDescription: {
        type: String,
        default: ""
    },

    copyright: {
        type: String,
        default: ""
    },

    officeHours: {
        type: String,
        default: ""
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
    "SiteSettings",
    siteSettingsSchema
);