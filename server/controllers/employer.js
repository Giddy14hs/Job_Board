import Employer from '../models/employer.js';

// Create a new employer
const createEmployer = async (req, res) => {
  try {
    const employer = new Employer(req.body);
    await employer.save();
    res.status(201).json(employer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all employers
const getAllEmployers = async (req, res) => {
  try {
    const employers = await Employer.find();
    res.status(200).json(employers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an employer by ID
const getEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);
    if (!employer) return res.status(404).json({ message: 'Employer not found' });
    res.status(200).json(employer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an employer
const updateEmployer = async (req, res) => {
  try {
    const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employer) return res.status(404).json({ message: 'Employer not found' });
    res.status(200).json(employer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employer
const deleteEmployer = async (req, res) => {
  try {
    const employer = await Employer.findByIdAndDelete(req.params.id);
    if (!employer) return res.status(404).json({ message: 'Employer not found' });
    res.status(200).json({ message: 'Employer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export default {createEmployer, getAllEmployers, getEmployerById, updateEmployer, deleteEmployer}