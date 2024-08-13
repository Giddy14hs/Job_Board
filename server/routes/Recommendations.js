import express from 'express';
import JobRecommendation from'../models/JobRecommendation';


const router = express.Router();


router.get('/recommendations/:id', async (req, res) => {
  try {
    const recommendations = await JobRecommendation.find({ userId: req.params.userId }).populate('jobId');
    res.send(recommendations);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
