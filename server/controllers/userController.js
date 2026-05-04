const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = require("../utils/generateToken.js");
const UserModel = require("../models/userModel.js");

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    // 1. Return early if user is not found
    if (!user) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // 2. Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = generateToken(user._id);
      // It's usually better to return success: true and the token
      return res.json({ success: true, token });
    } else {
      // 3. Return for wrong password
      return res.json({ success: false, message: "Invalid credentials" });
    }

  } catch (error) {
    console.error(error); // Log the error for your own debugging
    res.status(500).json({ success: false, message: "Server error" });
  }
};
exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Added await here
    const exists = await UserModel.findOne({ email }); 
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }

    // 2. Corrected to bcrypt.hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    const token = generateToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Registration failed" });
  }
};
exports.adminLogin = async (req, res) => {};
