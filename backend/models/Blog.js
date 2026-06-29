const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            unique: true,
        },

        excerpt: {
            type: String,
            required: true,
        },

        content:{
            type:String,
            required:true,
        },

        author: {
            type: String,
            default: "AI Solutions",
        },

        category: {
            type: String,
            default: "Technology",
        },

        image: {
            type: String,
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

module.exports = mongoose.model("Blog", blogSchema);