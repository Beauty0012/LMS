import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Score = () => {
  const navigate = useNavigate();
  const location = useLocation();  // To access the state passed during navigation
  const score = location.state?.score || 0;  // Get score passed via navigation
  const totalQuestions = location.state?.totalQuestions || 0;  // Get total questions passed via navigation

  const handleBackToHome = () => {
    navigate('/');  // Navigate to the SignIn page
  };



  return (
    <div className="score-container" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>YOUR SCORE</h2>
      <p>Your score is: {score} out of {totalQuestions}</p>
      <button 
        onClick={handleBackToHome} 
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
        Back to Home
      </button>
    </div>
  );
};

export default Score;





