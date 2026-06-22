const Contact = require("../models/Contact");
const Service = require("../models/Service");
const Blog = require("../models/Blog");
const Event = require("../models/Event");

const getDashboardStats = async (req, res) => {
    try {
        const totalContacts = 
            await Contact.countDocuments();

        const totalServices = 
            await Service.countDocuments();

        const totalBlogs = 
            await Blog.countDocuments();

        const totalEvents = 
            await Event.countDocuments();

        const recentContacts = 
            await Contact.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({
            totalContacts,
            totalServices,
            totalBlogs,
            totalEvents,
            recentContacts
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getDashboardStats
};