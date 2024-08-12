// controllers/jobListingController.js
import JobListing from'../models/jobListing.js';

// Create a new job listing
const createJobListing = async (req, res) => {
  try {
    const jobListing = new JobListing(req.body);
    await jobListing.save();
    res.status(201).json(jobListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job listings
const getAllJobListings = async (req, res) => {
  try {
    const jobListings = await JobListing.find();
    res.status(200).json(jobListings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a job listing by ID
const getJobListingById = async (req, res) => {
  try {
    const jobListing = await JobListing.findById(req.params.id).populate('employerId');
    if (!jobListing) return res.status(404).json({ message: 'Job Listing not found' });
    res.status(200).json(jobListing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a job listing
const updateJobListing = async (req, res) => {
  try {
    const jobListing = await JobListing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobListing) return res.status(404).json({ message: 'Job Listing not found' });
    res.status(200).json(jobListing);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a job listing
const deleteJobListing = async (req, res) => {
  try {
    const jobListing = await JobListing.findByIdAndDelete(req.params.id);
    if (!jobListing) return res.status(404).json({ message: 'Job Listing not found' });
    res.status(200).json({ message: 'Job Listing deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default {createJobListing, getAllJobListings, getJobListingById, updateJobListing, deleteJobListing}