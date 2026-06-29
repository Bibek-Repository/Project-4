const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    jobTitle: {
      type: String,
      required: true,
    },

    jobDetails: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["New", "Viewed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model(
  "Contact",
  ContactSchema
);