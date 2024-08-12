import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const jobSeekerSchema = new Schema({
  resume: { type: String },  // URL or file reference
  skills: [{ type: String }],
  experience: [{ type: String }],
  education: [{ type: String }],
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);

export default JobSeeker;