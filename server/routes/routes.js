const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  generateOTP,
  verifyOTP,
  resetpassword,
  createResetSession,
} = require("../controllers/appController");
// MiddleWare
const isLoggedIn = require("../middleware/isLogged");
// Define routes and connect them to the controller functions
router.post("/register", register);
router.post("/login", login);
router.post("/logout", isLoggedIn, logout);
router.post("/generate-otp", generateOTP);
router.post("/verify-otp", verifyOTP);
router.post("/reset-password", resetpassword);
router.post("/create-reset-session", createResetSession);

module.exports = router;
