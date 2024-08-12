import mongoose from'mongoose';

const Schema = mongoose.Schema;

const jobListingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String },
  salary: { type: String },
  employerId: { type: Schema.Types.ObjectId, ref: 'Employer', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  expiresAt: { type: Date }
});

const JobListing = mongoose.model('JobListing', jobListingSchema);

export default JobListing;
