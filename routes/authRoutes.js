const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

/**
 * This module defines the routes for user authentication,
 * including registration and login functionalities.
 * It uses Express.js for routing and imports the necessary
 * controller functions from the authController module.
 * 
 * The routes are set up to handle POST requests:
 * - POST /register: Triggers the register function to handle user registration.
 * - POST /login: Triggers the login function to handle user login.
 * 
 * Finally, the router is exported for use in other parts of the application.
 */


router.post("/register", register);
router.post("/login", login);



module.exports = router;
