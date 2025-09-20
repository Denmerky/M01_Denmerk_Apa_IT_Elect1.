import React, { useState } from 'react';
import './App.js';

function App() {
  const [studentData, setStudentData] = useState('');
  const [formData, setFormData] = useState({
    studentId: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    course: 'Computer Science'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudentData({ ...formData });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Campus Well</h1>
          <p>Student Portal & Wellness Platform</p>
        </div>
        
        <div className="content">
          <div className="login-form">
            <div className="welcome">
              <h2>Student Login</h2>
              <p>Access your academic information, campus resources, and wellness tools.</p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="studentId">Student ID</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="course">Course</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
              
              <button type="submit" className="btn">Login to Campus Well</button>
            </form>
          </div>
          
          <div className="data-display">
            <h2>Student Information</h2>
            {studentData ? (
              <div className="student-card">
                <div className="student-info">
                  <p><span className="info-label">Student ID:</span> {studentData.studentId}</p>
                  <p><span className="info-label">Name:</span> {studentData.firstName} {studentData.lastName}</p>
                  <p><span className="info-label">Email:</span> {studentData.email}</p>
                  <p><span className="info-label">Course:</span> {studentData.course}</p>
                  <p><span className="info-label">Status:</span> <span className="status-active">Active</span></p>
                  <p><span className="info-label">Last Login:</span> {new Date().toLocaleString()}</p>
                </div>
              </div>
            ) : (
              <div className="no-data">
                <p>Please login to view your student information</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="footer">
          <p>Campus Well &copy; 2023 | Supporting Student Success and Wellbeing</p>
        </div>
      </div>
    </div>
  );
}

export default App;