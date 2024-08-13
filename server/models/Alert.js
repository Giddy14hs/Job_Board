import mongoose from 'mongoose';

const AlertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  criteria: { type: String, required: true }
});

const Alert = mongoose.model('Alert', AlertSchema);
export default Alert;