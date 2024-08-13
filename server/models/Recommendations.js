const mongoose = require('mongoose');

const jobRecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  score: { type: Number, required: true }, // score based on match
});

module.exports = mongoose.model('JobRecommendation', jobRecommendationSchema);
