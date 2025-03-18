import React from "react";
import "../App.css";

const LessonCard = ({ lesson }) => {
  return (
    <div className="lesson-card">
      <h3>{lesson.title}</h3>
      <p>{lesson.description}</p>
      {lesson.videoUrl && (
        <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">
          <button className="lesson-button">Watch Video</button>
        </a>
      )}
    </div>
  );
};

export default LessonCard;
