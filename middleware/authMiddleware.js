const jwt = require("jsonwebtoken");

/**
 * Middleware for authenticating JSON Web Tokens (JWT) in a Node.js application.
 * This function checks for the presence of a JWT in the "Authorization" header of the request.
 * If the token is valid, it decodes the token and attaches the user ID to the request object.
 * If the token is invalid or missing, it responds with a 401 Unauthorized status.
 * 
 * Usage:
 * - Attach this middleware to routes that require authentication.
 * - Ensure that the JWT_SECRET environment variable is set for verification.
 */


const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", ""); 

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
