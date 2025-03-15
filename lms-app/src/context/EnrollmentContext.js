import { createContext, useState } from "react";

export const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);

  const enrollInCourse = (student) => {
    setEnrolledStudents((prev) => [...prev, student]);
  };

  return (
    <EnrollmentContext.Provider value={{ enrolledStudents, enrollInCourse }}>
      {children}
    </EnrollmentContext.Provider>
  );
};
