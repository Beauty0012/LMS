import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock data (replace this with an API call in a real application)
const studentsData = [
  { name: 'Anu', rollNo: '1101' },
  { name: 'Aaradhya', rollNo: '1102' },
  { name: 'Niha', rollNo: '1103' }
];

const SignIn = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the name and roll number match a record in studentsData
    const student = studentsData.find(
      (student) => student.name === name && student.rollNo === rollNo
    );

    if (student) {
      setMessage(`Welcome ${name}, your Roll No is ${rollNo}`);
      setError(''); // Clear any previous error message

      // Navigate to the Quiz page after successful sign-in
      navigate('/quiz');
    } else {
      setMessage('');
      setError('Invalid name or roll number');
    }
  };

  return (
    <div className="signin-container">
      <h2>Student Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Roll Number:</label>
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter your roll number"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SignIn;



