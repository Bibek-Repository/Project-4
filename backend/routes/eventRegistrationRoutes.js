const express = require("express");

const router = express.Router();

const {
  registerForEvent,
  getRegistrations,
  deleteRegistration,
} = require("../controllers/eventRegistrationController");

const {
  protect,
} = require("../middleware/authMiddleware");

// =========================
// Public Route
// =========================

router.post("/", registerForEvent);

// =========================
// Admin Routes
// =========================

router.get(
  "/",
  protect,
  getRegistrations
);

router.delete(
  "/:id",
  protect,
  deleteRegistration
);

module.exports = router;