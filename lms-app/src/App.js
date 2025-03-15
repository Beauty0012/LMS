// src/App.js
import React, { useState } from "react";
import EnrollmentForm from "./components/EnrollmentForm";
import CourseList from "./components/CourseList";
import "./styles/index.css";

const App = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const handleEnroll = (student) => {
    setEnrolledStudents([...enrolledStudents, student]);
  };

  return (
    <div className="app-container">
      <h1 className="dashboard-title">Student Enrollment Dashboard</h1>
      <EnrollmentForm onEnroll={handleEnroll} />
      <CourseList enrolledStudents={enrolledStudents} />
    </div>
  );
};

export default App;
