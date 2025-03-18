import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

const PythonQuizQuestions = () => {
  const questions = [
    {
      question: "Which of the following is used to define a function in Python?",
      options: ["def", "function", "func", "define"],
      answer: "def",
    },
    {
        question: "Which of the following is used to define a block of code in Python language?",
        options: ["Indentation", " Key", "Brackets", "All of the mentioned"],
        answer: "Indentation",
    },
      {
        question: " Python supports the creation of anonymous functions at runtime, using a construct called __________",
        options: ["pi", "anonymous", "lambda", "none of the mentioned"],
        answer: "lambda",
    },
    {
        question: "What does pip stand for python?",
        options: [" Pip Installs Python", " Pip Installs Packages", "Preferred Installer Program", "All of the mentioned"],
        answer: "Preferred Installer Program",
    },
    {
        question: "Which of the following is not a core data type in Python programming?",
        options: ["Tuples", "Lists", "Class", "Dictionarye"],
        answer: "Class",
    },
    
  ];

  const [answers, setAnswers] = useState(new Array(questions.length).fill(''));
  const [timeLeft, setTimeLeft] = useState(15 * 60);  // 15 minutes in seconds
  const navigate = useNavigate();  // Hook for navigation

  const handleChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let score = 0;
    const totalQuestions = questions.length;
  
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        score++;
      }
    });
  
    // Navigate to the Score page and pass both score and totalQuestions using state
    navigate('/score', { state: { score, totalQuestions } });
  };
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          alert("Time is up! The quiz is now over.");
          handleSubmit();  // Submit automatically when time is up
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);  // Cleanup timer
  }, []);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="quiz-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h2>Python Quiz</h2>

          {/* Display the questions */}
          {questions.map((q, index) => (
            <div key={index}>
              <h3>{index + 1}. {q.question}</h3>
              {q.options.map((option, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={(e) => handleChange(e, index)}
                  />
                  {option}
                </div>
              ))}
            </div>
          ))}

          {/* Submit button */}
          <button onClick={handleSubmit}>Submit</button>
        </div>

        {/* Timer on the right side */}
        <div style={{
          position: 'fixed',
          right: '10px',
          top: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
        }}>
          Time Remaining: {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};

export default PythonQuizQuestions;
