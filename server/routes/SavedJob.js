import express from 'express';
import SavedJob from '../models/SavedJob.js';


const router = express.Router();
router.post('/saved-jobs', async (req, res) => {
  const savedJob = new SavedJob(req.body);
  try {
    await savedJob.save();
    res.status(201).send(savedJob);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/saved-jobs/:userId', async (req, res) => {
  try {
    const savedJobs = await SavedJob.find({ userId: req.params.userId }).populate('jobId');
    res.send(savedJobs);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
