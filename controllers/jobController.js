/**
 * Job Controller Module
 * 
 * This module handles the CRUD operations for job postings in a job application system.
 * 
 * Functions:
 * - createJob: Creates a new job posting based on the request body and saves it to the database.
 * - getJobs: Retrieves all job postings from the database and returns them in JSON format.
 * - updateJob: Updates an existing job posting identified by its ID with the provided data.
 * - deleteJob: Deletes a specific job posting from the database based on its ID.
 * 
 * This module uses the Mongoose library to interact with a MongoDB database.
 * All operations are performed asynchronously using async/await syntax to handle 
 * promises effectively.
 */



const Job = require("../models/Job");

exports.createJob = async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
};

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

exports.updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
};
