const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  requirements: String,
  salary: Number,
  location: String,
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Job", jobSchema);
