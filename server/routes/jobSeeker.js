// routes/jobSeekerRoutes.js
import express from 'express';
import jobSeekerController from '../controllers/jobSeeker.js';

const router = express.Router();

// Create a new job seeker
router.post('/', jobSeekerController.createJobSeeker);

// Get all job seekers
router.get('/', jobSeekerController.getAllJobSeekers);

// Get a job seeker by ID
router.get('/:id', jobSeekerController.getJobSeekerById);

// Update a job seeker by ID
router.put('/:id', jobSeekerController.updateJobSeeker);

// Delete a job seeker by ID
router.delete('/:id', jobSeekerController.deleteJobSeeker);

export default router;