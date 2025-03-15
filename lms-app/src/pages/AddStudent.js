import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddStudent({ onAddStudent }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent({ id, name, email, course });
    navigate('/');
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} required />
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
          <option value="SQl">SQL</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Node.js">Node.js</option>
        </select>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
