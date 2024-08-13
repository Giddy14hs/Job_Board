// server.js or routes/alerts.js
import express from 'express';
import Alert from "../models/Alert.js";


const router = express.Router();
// Create a job alert
router.post('/', async (req, res) => {
  try {
    const { userId, criteria } = req.body;
    const newAlert = new Alert({ userId, criteria });
    await newAlert.save();
    res.status(201).json(newAlert);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get alerts for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const alerts = await Alert.find({ userId });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
