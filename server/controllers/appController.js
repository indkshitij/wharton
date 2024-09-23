const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");

//   {
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "password": "mysecurepassword"
//   }
async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    let exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(409).send("Email Already Exists");
    }

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(password, salt);

    // Create the new user in the database
    let user = await userModel.create({
      name,
      email,
      password: hashedPwd,
    });

    // Respond with the newly created user data (without password)
    res.status(201).json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Internal Server Error:", err); // Log the error for debugging
    res.status(500).send("Internal Server Issue");
  }
}

// {
//     "email": "johndoe@example.com",
//     "password": "mysecurepassword"
// }
async function login(req, res) {
  let { email, password } = req.body;
  try {
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send("Email or Password Incorrect");
    }
    let auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).send("Email or Password Incorrect");
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
    });
    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).send("Internal Server Issue");
  }
}

async function logout(req, res) {
  try {
    res.cookie("token", "", {
      httpOnly: true,
    });
    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).send("Internal Server Issue");
  }
}

async function generateOTP(req, res) {
  try {
    const { email } = req.body;

    let OTP = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    await userModel.updateOne(
      { email },
      { otp: OTP, otpExpires: Date.now() + 300000 }
    ); // OTP expires in 5 minutes

    // Send the OTP via email
    const transporter = nodemailer.createTransport({
      service: "Gmail", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${OTP}. It will expire in 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("OTP has been sent to your email.");
  } catch (err) {
    console.error("Error generating OTP:", err);
    res.status(500).send("Internal Server Error");
  }
}
async function verifyOTP(req, res) {
  try {
    const { email, otp } = req.body; // Get email and OTP from request body
    const user = await userModel.findOne({ email });

    // Check if user exists and OTP is valid
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Check if OTP matches and is not expired
    if (user.otp !== otp || Date.now() > user.otpExpires) {
      return res.status(400).send("Invalid or expired OTP");
    }

    // Clear OTP and OTP expiration time
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    res.status(200).send("OTP verified successfully");
  } catch (err) {
    console.error("Error verifying OTP:", err);
    res.status(500).send("Internal Server Error");
  }
}

async function resetpassword(req, res) {}
async function createResetSession(req, res) {}

// Export all functions
module.exports = {
  register,
  login,
  logout,
  generateOTP,
  verifyOTP,
  resetpassword,
  createResetSession,
};
