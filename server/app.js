import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import employerRoutes from './routes/employer.js';
import jobSeekerRoutes from './routes/jobSeeker.js';
import jobListingRoutes from './routes/jobListing.js';
import applicationRoutes from './routes/jobApplication.js';
import alertRoutes from "./routes/alerts.js"
import userRoutes from './routes/users.js';
import connection from './config/db.js';
import mysql from "mysql2/promise"
import dotenv from "dotenv"

const app = express();

dotenv.config();
// Middleware
app.use(bodyParser.json());
app.use(cors());

mongoose.set('debug', true);

// Use routes
app.use('/employers', employerRoutes);
app.use('/candidate', jobSeekerRoutes);
app.use('job-listings', jobListingRoutes);
app.use('/applications', applicationRoutes);
app.use('/alerts', alertRoutes);
app.use('/user', userRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

async function initializeDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    console.log('Connected to the database.');
    return connection;
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
    throw err;
  }
}

initializeDatabase().then(() => {
  // Start your server or other application logic here
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});