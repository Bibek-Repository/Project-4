const express = require("express");

const router = express.Router();

const {
  subscribe,
  getSubscribers,
  deleteSubscriber,
} = require("../controllers/newsletterController");

const {
  protect,
} = require("../middleware/authMiddleware");

// Public
router.post("/", subscribe);

// Admin
router.get("/", protect, getSubscribers);

router.delete("/:id", protect, deleteSubscriber);

module.exports = router;