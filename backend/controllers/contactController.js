const Contact = require("../models/Contact");

// ======================
// Create Contact
// ======================

const createContact = async (req, res) => {

  try {

    const {
  name,
  email,
  phone,
  company,
  country,
  jobTitle,
  jobDetails,
} = req.body;

    // Basic validation

    if (
  !name ||
  !email ||
  !phone ||
  !company ||
  !country ||
  !jobTitle ||
  !jobDetails
) {
  return res.status(400).json({
    success: false,
    message: "All fields are required.",
  });
}

    const contact = await Contact.create({
  name,
  email,
  phone,
  company,
  country,
  jobTitle,
  jobDetails,
});

    res.status(201).json({
  success: true,
  message: "Enquiry submitted successfully.",
  contact,
});

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};

// ======================
// Get Contacts
// ======================

const getContacts = async (req, res) => {

  try {

    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json(contacts);

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};

// ======================
// Delete Contact
// ======================

const deleteContact = async (req, res) => {

  try {

    const contact = await Contact.findById(
      req.params.id
    );

    if (!contact) {

      return res.status(404).json({

        message: "Enquiry not found",

      });

    }

    await contact.deleteOne();

    res.status(200).json({

      success: true,
      message: "Enquiry deleted successfully.",

    });

  } catch (error) {

    res.status(500).json({

      success: false,
      message: error.message,

    });

  }

};

const markAsViewed = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Enquiry not found.",
      });
    }

    contact.status = "Viewed";

    await contact.save();

    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
  markAsViewed,
};