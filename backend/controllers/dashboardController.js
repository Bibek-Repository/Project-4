const Blog = require("../models/Blog");
const Service = require("../models/Service");
const Event = require("../models/Event");
const Contact = require("../models/Contact");
const Gallery = require("../models/Gallery");

const getDashboardStats = async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const totalServices = await Service.countDocuments();
    const totalEvents = await Event.countDocuments();
    const totalGallery = await Gallery.countDocuments();
    const totalContacts = await Contact.countDocuments();

    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const recentBlogs = await Blog.find()
      .sort({ createdAt: -1 })
      .limit(5);

    const upcomingEvents = await Event.find({
      eventDate: {
        $gte: new Date(),
      },
    })
      .sort({ eventDate: 1 })
      .limit(5);

    const allContacts = await Contact.find();

    return res.status(200).json({
      totalBlogs,
      totalServices,
      totalEvents,
      totalGallery,
      totalContacts,
      recentContacts,
      recentBlogs,
      upcomingEvents,
      allContacts,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};