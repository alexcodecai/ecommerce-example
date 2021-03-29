const express = require("express");

const routes = express.Router();

const user = require("../controllers/userController");
//const getuser = require("../controllers/userController");
const protect = require("../middleware/authMiddleware");
//const register = require("../controllers/userController");

routes.post("/", user.registerUser);
routes.post("/login", user.authUser);
routes
  .get("/profile", protect.protect, user.getUserProfile)
  .put(protect, user.updateUserProfile);

module.exports = routes;
