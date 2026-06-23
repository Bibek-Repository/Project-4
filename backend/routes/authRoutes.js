const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const{
  registerAdmin,
  loginAdmin,
  changePassword
} = require("../controllers/authController");

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.put("/change-password", protect, changePassword);

module.exports = router;