import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const employerSchema = new Schema({
  companyName: { type: String, required: true },
  description: { type: String },
  website: { type: String },
  location: { type: String },
  industry: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Employer = mongoose.model('Employer', employerSchema);

export default Employer;