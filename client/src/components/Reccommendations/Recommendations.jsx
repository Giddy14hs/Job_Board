import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Recommendations.css"

const JobRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const userId = 'your-user-id'; // Replace with the actual user ID

  useEffect(() => {
    axios.get(`/api/recommendations/${userId}`)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  return (
    <div>
      <h2>Job Recommendations</h2>
      <ul>
        {recommendations.map(rec => (
          <li key={rec._id}>
            <h3>{rec.jobId.title}</h3>
            <p>{rec.jobId.company}</p>
            <p>Match Score: {rec.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobRecommendations;
