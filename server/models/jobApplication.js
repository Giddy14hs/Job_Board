import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jobApplicationSchema = new Schema({
  jobListingId: { type: Schema.Types.ObjectId, ref: 'JobListing', required: true },
  jobSeekerId: { type: Schema.Types.ObjectId, ref: 'JobSeeker', required: true },
  resume: { type: String },  // URL or file reference
  coverLetter: { type: String },
  status: { type: String, enum: ['applied', 'interviewing', 'accepted', 'rejected'], default: 'applied' },
  appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', jobApplicationSchema);

export default Application;