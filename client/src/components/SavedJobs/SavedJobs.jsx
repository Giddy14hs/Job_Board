import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./SavedJobs.css"

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const userId = 'your-user-id'; // Replace with the actual user ID

  useEffect(() => {
    axios.get(`/api/saved-jobs/${userId}`)
      .then(response => setSavedJobs(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  const saveJobForLater = (jobId) => {
    axios.post('/api/saved-jobs', { userId, jobId })
      .then(response => setSavedJobs([...savedJobs, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Saved Jobs</h2>
      <ul>
        {savedJobs.map(job => (
          <li key={job._id}>
            <h3>{job.jobId.title}</h3>
            <p>{job.jobId.company}</p>
            <p>Saved at: {new Date(job.savedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedJobs;
