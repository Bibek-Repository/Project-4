const Newsletter = require("../models/Newsletter");

// ===========================
// Subscribe
// ===========================

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const existingSubscriber = await Newsletter.findOne({
      email,
    });

    if (existingSubscriber) {
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed.",
      });
    }

    const subscriber = await Newsletter.create({
      email,
    });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully.",
      subscriber,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Get Subscribers
// ===========================

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({
      createdAt: -1,
    });

    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===========================
// Delete Subscriber
// ===========================

const deleteSubscriber = async (req, res) => {
  try {
    const subscriber = await Newsletter.findById(
      req.params.id
    );

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found.",
      });
    }

    await subscriber.deleteOne();

    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  subscribe,
  getSubscribers,
  deleteSubscriber,
};