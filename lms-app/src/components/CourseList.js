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
        <table className="enrollment-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Course</th>
              <th>Enrolled At</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student, index) => (
              <tr key={index} className="enrollment-row">
                <td>{index + 1}</td>
                <td className="student-name">{student.studentName}</td>
                <td className="course-name">{student.course}</td>
                <td className="timestamp">{student.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CourseList;
