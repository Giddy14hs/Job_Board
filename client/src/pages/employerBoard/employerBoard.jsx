import React, { useState } from 'react';
import './employerBoard.css';

const Employer = () => {
  // Initial jobs with at least one job in each section
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Software Developer', description: 'Develop software...', location: 'Remote', salary: 60000, status: 'active' },
    { id: 2, title: 'Project Manager', description: 'Manage projects...', location: 'New York', salary: 80000, status: 'pending' },
    { id: 3, title: 'Graphic Designer', description: 'Design graphics...', location: 'Los Angeles', salary: 50000, status: 'inactive' }
  ]);
  const [editingJob, setEditingJob] = useState(null);
  const [newJob, setNewJob] = useState({ title: '', description: '', location: '', salary: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob({ ...newJob, [name]: value });
  };

  const handleSave = () => {
    if (editingJob) {
      setJobs(jobs.map((j) => (j.id === editingJob.id ? { ...editingJob, ...newJob } : j)));
    } else {
      const newId = Date.now();
      const newStatus = getJobsByStatus('active').length === 0
        ? 'active'
        : 'pending';
      setJobs([...jobs, { ...newJob, id: newId, status: newStatus }]);
    }
    setNewJob({ title: '', description: '', location: '', salary: '' });
    setEditingJob(null);
  };

  const handleEdit = (job) => {
    setEditingJob(job);
    setNewJob(job);
  };

  const handleClone = (job) => {
    const clonedJob = { ...job, id: Date.now(), title: `${job.title} (Copy)` };
    setJobs([...jobs, clonedJob]);
  };

  const handleDelete = (job) => {
    setJobs(jobs.filter((j) => j.id !== job.id));
  };

  const handleStatusChange = (job, status) => {
    if (status === 'archived') {
      setJobs(jobs.map((j) => (j.id === job.id ? { ...j, status: 'pending' } : j)));
    } else {
      setJobs(jobs.map((j) => (j.id === job.id ? { ...j, status } : j)));
    }
  };

  const getJobsByStatus = (status) => jobs.filter((job) => job.status === status);

  return (
    <div className="container">
      <div className="job-columns">
        <div className="job-column">
          <h3>Active Jobs</h3>
          <div className="job-list">
            {getJobsByStatus('active').length > 0 ? (
              getJobsByStatus('active').map((job) => (
                <div key={job.id} className="job-item">
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <p>Location: {job.location}</p>
                  <p>Salary: {job.salary}</p>
                  <select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job, e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="expired">Expired</option>
                  </select>
                  <button className="edit" onClick={() => handleEdit(job)}>Edit</button>
                  <button className="clone" onClick={() => handleClone(job)}>Clone</button>
                  <button className="delete" onClick={() => handleDelete(job)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No Active Jobs</p>
            )}
          </div>
        </div>

        <div className="job-column">
          <h3>Pending Jobs</h3>
          <div className="job-list">
            {getJobsByStatus('pending').length > 0 ? (
              getJobsByStatus('pending').map((job) => (
                <div key={job.id} className="job-item">
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <p>Location: {job.location}</p>
                  <p>Salary: {job.salary}</p>
                  <select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job, e.target.value)}
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="expired">Expired</option>
                  </select>
                  <button className="edit" onClick={() => handleEdit(job)}>Edit</button>
                  <button className="clone" onClick={() => handleClone(job)}>Clone</button>
                  <button className="delete" onClick={() => handleDelete(job)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No Pending Jobs</p>
            )}
          </div>
        </div>

        <div className="job-column">
          <h3>Expired Jobs</h3>
          <div className="job-list">
            {getJobsByStatus('inactive').length > 0 ? (
              getJobsByStatus('inactive').map((job) => (
                <div key={job.id} className="job-item">
                  <h4>{job.title}</h4>
                  <p>{job.description}</p>
                  <p>Location: {job.location}</p>
                  <p>Salary: {job.salary}</p>
                  <select
                    value={job.status}
                    onChange={(e) => handleStatusChange(job, e.target.value)}
                  >
                    <option value="expired">Expired</option>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                  </select>
                  <button className="edit" onClick={() => handleEdit(job)}>Edit</button>
                  <button className="clone" onClick={() => handleClone(job)}>Clone</button>
                  <button className="delete" onClick={() => handleDelete(job)}>Delete</button>
                </div>
              ))
            ) : (
              <p>No Expired Jobs</p>
            )}
          </div>
        </div>
      </div>

      <div className="job-form" id="postJob">
        <h2><b>Your Job Listing</b></h2>
        <div className="form-group">
          <label htmlFor="title">Job Title</label>
          <input type="text" name="title" value={newJob.title} onChange={handleChange} placeholder="Job Title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Job Description</label>
          <textarea name="description" value={newJob.description} onChange={handleChange} placeholder="Job Description" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" name="location" value={newJob.location} onChange={handleChange} placeholder="Location" />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input type="number" name="salary" value={newJob.salary} onChange={handleChange} placeholder="Salary" />
        </div>
        <button className="save-button" onClick={handleSave}>
          {editingJob ? 'Update' : 'Create'} Job
        </button>
      </div>
    </div>
  );
};

export default Employer;

