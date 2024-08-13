import React, {useState, useEffect} from 'react'
import './candidateBoard.css'
import JobAlerts from "../../components/alerts/JobAlerts"
import JobRecommendations from '../../components/Reccommendations/Recommendations';
import SavedJobs from "../../components/SavedJobs/SavedJobs"

const CandidateDashboard = ({ profile, applications, jobs }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
      if (jobs) {
          setFilteredJobs(
              jobs.filter(job => 
                  job.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
          );
      }
  }, [searchTerm, jobs]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  if (!jobs) {
      return <div>Loading jobs...</div>; // or some loading indicator
  }

  return (
      <div>
          <h2>Candidate Dashboard</h2>
          {/* Job Search */}
          <div>
              <input 
                  type="text" 
                  placeholder="Search for jobs..." 
                  value={searchTerm} 
                  onChange={handleSearchChange} 
              />
          </div>
          {/* Job Recommendations */}
          <JobRecommendations profile={profile} pastApplications={applications} />
          {/* Job Applications */}
          <SavedJobs jobs={filteredJobs} />
          {/* Job Alerts */}
          <JobAlerts alerts={alerts} setAlerts={setAlerts} />
          {/* Display filtered jobs */}
          <div>
              <h3>Available Jobs</h3>
              <ul>
                  {filteredJobs.map(job => (
                      <li key={job.id}>
                          <h4>{job.title}</h4>
                          <p>{job.description}</p>
                          <p>Location: {job.location}</p>
                          <p>Salary: {job.salary}</p>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
};

export default CandidateDashboard;