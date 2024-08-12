// controllers/jobSeekerController.js
import JobSeeker from'../models/jobSeeker.js';

// Create a new job seeker
const createJobSeeker = async (req, res) => {
  try {
    const jobSeeker = new JobSeeker(req.body);
    await jobSeeker.save();
    res.status(201).json(jobSeeker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job seekers
const getAllJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.find();
    res.status(200).json(jobSeekers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a job seeker by ID
const getJobSeekerById = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findById(req.params.id);
    if (!jobSeeker) return res.status(404).json({ message: 'Job Seeker not found' });
    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a job seeker
const updateJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobSeeker) return res.status(404).json({ message: 'Job Seeker not found' });
    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job seeker
const deleteJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findByIdAndDelete(req.params.id);
    if (!jobSeeker) return res.status(404).json({ message: 'Job Seeker not found' });
    res.status(200).json({ message: 'Job Seeker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default {createJobSeeker, getAllJobSeekers, getJobSeekerById, updateJobSeeker, deleteJobSeeker}