const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );
};

const registerAdmin = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const existingAdmin =
      await Admin.findOne({ email });

    if (existingAdmin) {
      return res
        .status(400)
        .json({
          message: "Admin already exists"
        });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const admin =
      await Admin.create({
        name,
        email,
        password: hashedPassword
      });
  res.status(201).json({
    message: "Admin created",
    admin: {
      _id: admin._id,
      name: admin.name,
      email: admin.email
    }
  });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin =
      await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const match =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!match) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id)
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const admin = await Admin.findById(req.admin._id);

    if(!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(
      currentPassword,
      admin.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    admin.password = hashedPassword;

    await admin.save();

    res.json({
      message: "Password updated successfully",
    });
    } catch (error) {
      res.status(500).json({
        message:error.message,
      });
    }
  };


module.exports = {
  registerAdmin,
  loginAdmin,
  changePassword
};