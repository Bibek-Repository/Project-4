const express = require("express");

const router = express.Router();

const {
  createGallery,
  getGallery,
  updateGallery,
  deleteGallery,
} = require(
  "../controllers/galleryController"
);

const {
  protect,
} = require(
  "../middleware/authMiddleware"
);

router.get("/", getGallery);

router.post(
  "/",
  protect,
  createGallery
);

router.put(
  "/:id",
  protect,
  updateGallery
);

router.delete(
  "/:id",
  protect,
  deleteGallery
);

module.exports = router;