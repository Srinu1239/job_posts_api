# Job Postings Application

This is a job posting application built using Node.js, Express, and MongoDB. It allows users to register, log in, and post job listings. The application features user authentication and CRUD operations for managing job postings.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- User registration and authentication
- Create, read, update, and delete job postings
- Secure routes using middleware
- Environment configuration with `.env` file

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-posting-app.git
   cd job-posting-app


2. npm install
3. Create a .env file in the root directory and add your environment variables. Example:
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/jobpostingapp
   JWT_SECRET=your_jwt_secret
4. node server.js
## Usage
Once the server is running, you can use tools like Postman or curl to interact with the API

## API Endpoints
 ### Authentication
   * POST /api/auth/register: Register a new user
   * POST /api/auth/login: Log in a user
 ### Job Postings
  * GET /api/jobs: Get all job postings
  * GET /api/jobs/
    : Get a job posting by ID
  * POST /api/jobs: Create a new job posting (protected)
  * PUT /api/jobs/
    : Update a job posting (protected)
  * DELETE /api/jobs/
    : Delete a job posting (protected)


