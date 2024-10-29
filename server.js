const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const cors = require('cors');
require("dotenv").config();

const app = express();
connectDB();

app.use(bodyParser.json());


/**
 * This is an Express.js server application that connects to a MongoDB database.
 * It utilizes middleware for body parsing, CORS support, and environment variable configuration.
 * The application defines two main API routes: '/api/auth' for authentication 
 * and '/api/jobs' for job-related operations. CORS is configured to allow requests 
 * from a specific frontend origin (localhost:3000) with support for various HTTP methods. 
 * The server listens on a port defined by an environment variable or defaults to 5000.
 */


app.use(cors({
  origin: 'http://localhost:3000', // Allow only frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true 
}));

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
