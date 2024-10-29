const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/**
 * This module exports two main functions: `register` and `login`, which handle user registration 
 * and authentication in a Node.js application using Express. 
 * 
 * - The `register` function hashes the user's password using bcrypt and saves the new user to the database.
 * - The `login` function verifies the user's credentials by comparing the input password with the 
 * stored hashed password. If valid, it generates a JSON Web Token (JWT) for session management.
 * 
 * Ensure that the environment variable `JWT_SECRET` is set for secure token generation.
 */



exports.register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: "User registered successfully" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token });

  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
