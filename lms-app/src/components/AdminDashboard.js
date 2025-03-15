import React, { useState } from 'react';
import '../styles/App.css';

const AdminDashboard = () => {
  const [enrollments, setEnrollments] = useState([
    { studentName: "Alice", course: "React" },
    { studentName: "Bob", course: "JavaScript" }
  ]);

  const removeEnrollment = (index) => {
    setEnrollments(enrollments.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <div className="card">
        <h2>Enrolled Students</h2>
        {enrollments.length === 0 ? (
          <p>No enrollments found.</p>
        ) : (
          <ul>
            {enrollments.map((enrollment, index) => (
              <li key={index}>
                {enrollment.studentName} - {enrollment.course} 
                <button className="btn-danger" onClick={() => removeEnrollment(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
