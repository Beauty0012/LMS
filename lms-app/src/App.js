import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

const TeacherDashboard = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("https://api.example.com/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  const addCourse = async () => {
    if (!newCourse) return;
    try {
      const response = await axios.post("https://api.example.com/courses", {
        name: newCourse,
      });
      setCourses([...courses, response.data]);
      setNewCourse("");
      alert("Course added successfully!"); // Pop-up message
      navigate("/courses"); // Redirects to courses page after adding
    } catch (error) {
      console.error("Error adding course", error);
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`https://api.example.com/courses/${id}`);
      setCourses(courses.filter(course => course.id !== id));
    } catch (error) {
      console.error("Error deleting course", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Teacher Dashboard</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter course name"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          className="input-field"
        />
        <button onClick={addCourse} className="add-button">
          Add Course
        </button>
      </div>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            {course.name}
            <button onClick={() => deleteCourse(course.id)} className="delete-button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CoursesPage = () => (
  <div className="dashboard-container">
    <h1 className="dashboard-title">Courses Page</h1>
    <p>List of all courses will be displayed here.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeacherDashboard />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
