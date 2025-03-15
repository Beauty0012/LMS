// src/components/EnrollmentForm.js
import React, { useState } from "react";
import "../styles/Forms.css";

const EnrollmentForm = ({ onEnroll }) => {
  const [studentName, setStudentName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const courses = [
    "React.js Fundamentals",
    "Advanced JavaScript",
    "Python for Beginners",
    "Data Structures & Algorithms",
    "Full-Stack Development",
    "Cybersecurity Basics",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse) {
      alert("Please select a course!");
      return;
    }

    // Get current timestamp
    const timestamp = new Date().toLocaleString(); 

    onEnroll({ studentName, course: selectedCourse, timestamp });
    setStudentName("");
    setSelectedCourse("");
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>Enroll in a Course</h2>
        <form onSubmit={handleSubmit}>
          <label>Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="input-field"
            required
          />

          <label>Course</label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="input-field"
            required
          >
            <option value="">-- Select a Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>

          <button type="submit" className="submit-btn">Enroll</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
