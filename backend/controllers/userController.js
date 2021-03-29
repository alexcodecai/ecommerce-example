const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");

const authUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchpassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken.generateToken(user._id)
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
    //throw new Error("Invalid email or password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  console.log("body", req.body);
  const { name, email, password } = req.body;

  if (name === "" || email === "" || password === "") {
    res.status(404).json({ message: "please enter all field" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "User already exists" });
    // throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken.generateToken(user._id)
    });
  } else {
    res.status(400).json({ message: "please enter valid information" });
    //throw new Error("Invalid user data");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken.generateToken(updateUser._id)
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

module.exports = { authUser, registerUser, getUserProfile, updateUserProfile };
