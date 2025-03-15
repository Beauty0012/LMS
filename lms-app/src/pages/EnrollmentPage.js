import React from "react";
import EnrollmentForm from "../components/EnrollmentForm";
import EnrollmentList from "../components/EnrollmentList";
import "../styles/EnrollmentPage.css";

const EnrollmentPage = ({ onEnroll }) => {
  return (
    <div className="enrollment-page">
      <EnrollmentForm onEnroll={onEnroll} />
      <EnrollmentList />
    </div>
  );
};

export default EnrollmentPage;
