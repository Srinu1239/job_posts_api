const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { createJob, getJobs, updateJob, deleteJob } = require("../controllers/jobController");

const router = express.Router();

/**
 * Job Routes Module
 * 
 * This module defines the API endpoints for job-related operations
 * such as creating, retrieving, updating, and deleting jobs. 
 * It utilizes Express Router to manage the routes and includes 
 * authentication middleware to secure certain routes. The 
 * controller functions (createJob, getJobs, updateJob, deleteJob) 
 * handle the logic for each operation.
 * 
 * Routes:
 * - POST /: Create a new job (requires authentication)
 * - GET /: Retrieve all jobs
 * - PUT /:id: Update a specific job by ID (requires authentication)
 * - DELETE /:id: Delete a specific job by ID (requires authentication)
 */



router.post("/", authMiddleware, createJob);
router.get("/", getJobs);
router.put("/:id", authMiddleware, updateJob);
router.delete("/:id", authMiddleware, deleteJob);

module.exports = router;
