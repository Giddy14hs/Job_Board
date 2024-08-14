// routes/jobSeekerRoutes.js
import express from 'express';
import {getCandidateProfile, updateCandidateProfile} from '../controllers/jobSeeker.js';
import Authentication from "../middleware/Authentication.js"

const router = express.Router();

// Get all job seekers
router.get('/profile', Authentication, getCandidateProfile);

//Update a job seeker by ID
router.put('/updateProfile', Authentication,
updateCandidateProfile);;

export default router;