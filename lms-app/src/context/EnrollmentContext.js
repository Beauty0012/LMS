import { createContext, useState } from "react";

export const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollInCourse = (course) => {
    setEnrolledCourses((prev) => [...prev, course]);
  };

  return (
    <EnrollmentContext.Provider value={{ enrolledCourses, enrollInCourse }}>
      {children}
    </EnrollmentContext.Provider>
  );
};
