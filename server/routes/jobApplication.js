import express from 'express';
import applicationController from '../controllers/jobApplication.js';

const router = express.Router();

// Create a new application
router.post('/', applicationController.createApplication);

// Get all applications
router.get('/', applicationController.getAllApplications);

// Get an application by ID
router.get('/:id', applicationController.getApplicationById);

// Update an application by ID
router.put('/:id', applicationController.updateApplication);

// Delete an application by ID
router.delete('/:id', applicationController.deleteApplication);

export default router;