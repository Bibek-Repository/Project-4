const Gallery = require("../models/Gallery");

const createGallery = async (req, res) => {
  try {

    const gallery =
      await Gallery.create(req.body);

    res.status(201).json(gallery);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getGallery = async (req, res) => {
  try {

    const images =
      await Gallery.find()
      .sort({ createdAt: -1 });

    res.json(images);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const updateGallery = async (req, res) => {
  try {

    const image =
      await Gallery.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(image);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const deleteGallery = async (req, res) => {
  try {

    await Gallery.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Image deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  createGallery,
  getGallery,
  updateGallery,
  deleteGallery,
};