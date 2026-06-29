const EventRegistration = require("../models/EventRegistration");

// ===================================
// Register for Event
// ===================================

const registerForEvent = async (req, res) => {
  try {
    const {
      eventId,
      eventTitle,
      name,
      email,
      phone,
      company,
      country,
      jobTitle,
    } = req.body;

    // Validation
    if (
      !eventId ||
      !eventTitle ||
      !name ||
      !email ||
      !phone ||
      !company ||
      !country ||
      !jobTitle
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Prevent duplicate registrations
    const existingRegistration =
      await EventRegistration.findOne({
        eventId,
        email,
      });

    if (existingRegistration) {
      return res.status(400).json({
        success: false,
        message:
          "You have already registered for this event.",
      });
    }

    const registration =
      await EventRegistration.create({
        eventId,
        eventTitle,
        name,
        email,
        phone,
        company,
        country,
        jobTitle,
      });

    res.status(201).json({
      success: true,
      message:
        "Successfully registered for the event.",
      registration,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===================================
// Get All Registrations
// ===================================

const getRegistrations = async (req, res) => {
  try {
    const registrations =
      await EventRegistration.find().sort({
        createdAt: -1,
      });

    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ===================================
// Delete Registration
// ===================================

const deleteRegistration = async (req, res) => {
  try {
    const registration =
      await EventRegistration.findById(
        req.params.id
      );

    if (!registration) {
      return res.status(404).json({
        success: false,
        message:
          "Registration not found.",
      });
    }

    await registration.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Registration deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerForEvent,
  getRegistrations,
  deleteRegistration,
};