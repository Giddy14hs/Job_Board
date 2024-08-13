import React from 'react'
import "./application.css"
import { useUser } from '../../context/userContext';

const Application = () => {

  const { user } = useUser();
  
  if (!user || user.role !== 'employer') {
    return <p>You need to be an employer to view this page.</p>;
  }

  // Mock data - in a real app, fetch this from an API
  const applications = [
    { jobId: 1, candidateName: 'John Doe', status: 'applied' },
    { jobId: 2, candidateName: 'Jane Smith', status: 'interviewed' },
  ];

  return (
    <div>
      <h2>Job Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Candidate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.jobId}>
              <td>{app.jobId}</td>
              <td>{app.candidateName}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Application;