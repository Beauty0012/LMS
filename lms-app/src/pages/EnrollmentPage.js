import React from "react";
import { useNavigate } from "react-router-dom";
import EnrollmentForm from "../components/EnrollmentForm";
import "../styles/EnrollmentPage.css";

const EnrollmentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1 className="dashboard-title">🎓 Student Enrollment Dashboard</h1>
      <button className="view-enrollments-btn" onClick={() => navigate("/enrolled-students")}>
        📋 View Enrolled Students
      </button>
      <EnrollmentForm />
    </div>
  );
};

export default EnrollmentPage;
