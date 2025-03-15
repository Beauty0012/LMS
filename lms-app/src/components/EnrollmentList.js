import React from "react";
import "../styles/EnrollmentPage.css";

const EnrollmentList = ({ enrolledStudents }) => {
  return (
    <div className="enrollment-list-container">
      <h2>Enrolled Students</h2>
      <ul>
        {enrolledStudents.map((student, index) => (
          <li key={index}>
            <strong>{student.studentName}</strong> - {student.course} <br />
            <span className="timestamp">Enrolled on: {student.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentList;
