import { useContext } from "react";
import { EnrollmentContext } from "../context/EnrollmentContext";
import '../styles/App.css';

const EnrollmentSuccess = () => {
  const { enrolledCourses } = useContext(EnrollmentContext);

  return (
    <div className="enrollment-success">
      <h2>Enrolled Courses</h2>
      <ul>
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course, index) => <li key={index}>{course}</li>)
        ) : (
          <p>No courses enrolled yet.</p>
        )}
      </ul>
    </div>
  );
};

export default EnrollmentSuccess;
