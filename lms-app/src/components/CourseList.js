// src/components/CourseList.js
import React from "react";
import "../styles/Forms.css";

const CourseList = ({ enrolledStudents }) => {
  return (
    <div className="course-list">
      <h2 className="section-title">📋 Enrolled Students</h2>
      {enrolledStudents.length === 0 ? (
        <p className="no-enrollment-msg">No students enrolled yet.</p>
      ) : (
        <ul className="enrollment-list">
          {enrolledStudents.map((student, index) => (
            <li key={index} className="enrollment-item">
              <div className="student-info">
                <h3>{student.studentName}</h3>
                <p className="course-name">📖 {student.course}</p>
                <p className="timestamp">⏰ Enrolled at: {student.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseList;
