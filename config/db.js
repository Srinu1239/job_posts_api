const mongoose = require('mongoose');
require('dotenv').config();

/**
 * This module establishes a connection to a MongoDB database using Mongoose.
 * It retrieves the MongoDB connection URI from environment variables using dotenv.
 * Upon successful connection, it logs a success message to the console.
 * In case of an error, it logs the error message and exits the process.
 */


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
