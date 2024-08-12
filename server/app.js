import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// Import routes
import employerRoutes from './routes/employer.js';
import jobSeekerRoutes from './routes/jobSeeker.js';
import jobListingRoutes from './routes/jobListing.js';
import applicationRoutes from './routes/jobApplication.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error); // Log the full error object
    process.exit(1);
  }
};

connectDB();

// Use routes
app.use('/api/employers', employerRoutes);
app.use('/api/job-seekers', jobSeekerRoutes);
app.use('/api/job-listings', jobListingRoutes);
app.use('/api/applications', applicationRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});