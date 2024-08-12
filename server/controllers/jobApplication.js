// controllers/applicationController.js
import Application from'../models/jobApplication.js';

// Create a new application
const createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all applications
const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('jobListingId jobSeekerId');
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an application by ID
const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('jobListingId jobSeekerId');
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an application
const updateApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json(application);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an application
const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.status(200).json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default {createApplication, getAllApplications, getApplicationById, updateApplication, deleteApplication}