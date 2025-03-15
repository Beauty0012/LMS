import React, { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import "../styles/EnrollmentPage.css";

const EnrollmentListPage = () => {
  const context = useContext(EnrollmentContext);

  if (!context) {
    return <p>Error: Context is not available. Make sure the provider is wrapping the component.</p>;
  }

  const { enrolledStudents } = context;

  return (
    <div className="page-container">
      <h1 className="dashboard-title">📋 Enrolled Students</h1>

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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.studentName}</td>
                <td>{student.course}</td>
                <td>{student.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnrollmentListPage;
