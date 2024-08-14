import JobSeeker from '../models/jobSeeker.js';

// Get candidate profile
export const getCandidateProfile = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findOne({ where: { userId: req.userId } });
    if (!jobSeeker) return res.status(404).json({ message: "Candidate not found" });

    res.status(200).json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update job seeker profile
export const updateCandidateProfile = async (req, res) => {
  const { bio, skills } = req.body;
  try {
    const [updated] = await JobSeeker.update(
      { bio, skills },
      { where: { userId: req.userId } }
    );
    if (!updated) return res.status(404).json({ message: 'Candidate not found' });

    const updatedJobSeeker = await JobSeeker.findOne({ where: { userId: req.userId } });
    res.status(200).json(updatedJobSeeker);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
