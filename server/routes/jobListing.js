import express from 'express';
import jobListingController from '../controllers/jobListing.js';

const router = express.Router();

// Create a new job listing
router.post('/', jobListingController.createJobListing);

// Get all job listings
router.get('/', jobListingController.getAllJobListings);

// Get a job listing by ID
router.get('/:id', jobListingController.getJobListingById);

// Update a job listing by ID
router.put('/:id', jobListingController.updateJobListing);

// Delete a job listing by ID
router.delete('/:id', jobListingController.deleteJobListing);

export default router;