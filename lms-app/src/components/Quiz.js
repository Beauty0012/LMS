import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const Quiz = () => {
  const [course, setCourse] = useState('');  // State to store the selected course
  const navigate = useNavigate();  // Hook for navigation

  const handleStart = () => {
    if (course === 'java') {
      navigate('/java-quiz');  // Navigate to Java questions page
    } else if (course === 'python') {
      navigate('/python-quiz');  // Navigate to Python questions page
    } else {
      alert('Please select a course first.');
    }
  };

  return (
    <div className="quiz-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Welcome to the Quiz!</h2>

      {/* Dropdown to choose the course */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="course">Choose your course:</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}  // Update the course state when a selection is made
        >
          <option value="">Select a course</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>

      {/* Start button */}
      <button
        className="start-button"
        onClick={handleStart}  // Start quiz based on the selected course
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Start
      </button>
    </div>
  );
};

export default Quiz;






