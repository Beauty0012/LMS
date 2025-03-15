// src/components/EnrollmentForm.js
import React, { useState, useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import "../styles/Forms.css";

const EnrollmentForm = () => {
  const [studentName, setStudentName] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const { enrollInCourse } = useContext(EnrollmentContext); // ✅ Get function from context

  const courses = [
    "React.js Fundamentals",
    "Advanced JavaScript",
    "Data Structures & Algorithms",
    "Full-Stack Development",
    "Cybersecurity Basics",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = studentName.trim(); // Trim spaces

    if (!trimmedName) {
      alert("Student name cannot be empty!");
      return;
    }

    if (!selectedCourse) {
      alert("Please select a course!");
      return;
    }

    enrollInCourse({
      studentName: trimmedName,
      course: selectedCourse,
      timestamp: new Date().toLocaleString(),
    });

    alert(`✅ ${trimmedName} successfully enrolled in ${selectedCourse}!`);

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

          <button type="submit" className="submit-btn">
            Enroll
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
