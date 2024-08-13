import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./JobAlerts.css"

const JobAlerts = () => {
  const [jobAlerts, setJobAlerts] = useState([]);
  const [alertData, setAlertData] = useState({ jobTitle: '', location: '', frequency: 'daily' });
  const userId = 'your-user-id'; // Replace with the actual user ID from your authentication system

  useEffect(() => {
    axios.get(`/api/alerts/${userId}`)
      .then(response => setJobAlerts(response.data))
      .catch(error => console.error(error));
  }, [userId]);

  const createJobAlert = (e) => {
    e.preventDefault();
    axios.post('/api/alerts', { ...alertData, userId })
      .then(response => setJobAlerts([...jobAlerts, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Job Alerts</h2>
      <form onSubmit={createJobAlert}>
        <input
          type="text"
          placeholder="Job Title"
          value={alertData.jobTitle}
          onChange={(e) => setAlertData({ ...alertData, jobTitle: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={alertData.location}
          onChange={(e) => setAlertData({ ...alertData, location: e.target.value })}
          required
        />
        <select
          value={alertData.frequency}
          onChange={(e) => setAlertData({ ...alertData, frequency: e.target.value })}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <button type="submit">Set Alert</button>
      </form>
      <ul>
        {jobAlerts.map(alert => (
          <li key={alert._id}>{alert.jobTitle} in {alert.location} ({alert.frequency})</li>
        ))}
      </ul>
    </div>
  );
};

export default JobAlerts;
