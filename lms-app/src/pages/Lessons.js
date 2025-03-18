import React, { useEffect, useState } from "react";
import LessonCard from "../components/LessonCard";
import "../App.css";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/lessons")
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) => console.error("Error fetching lessons:", error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Learning Management System</h1>
      <h2 className="subtitle">Lessons</h2>
      <div className="lesson-list">
        {lessons.length > 0 ? (
          lessons.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)
        ) : (
          <p>No lessons available.</p>
        )}
      </div>
    </div>
  );
};

export default Lessons;
