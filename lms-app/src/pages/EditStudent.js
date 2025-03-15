import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent({ students, onUpdateStudent }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the student that needs to be edited
  const existingStudent = students.find(student => student.id === id) || {
    name: '',
    email: '',
    course: '',
  };

  // ✅ Hooks must be at the top level
  const [name, setName] = useState(existingStudent.name);
  const [email, setEmail] = useState(existingStudent.email);
  const [course, setCourse] = useState(existingStudent.course);

  // If student not found, show an error message but still allow hooks to be defined
  if (!students.find(student => student.id === id)) {
    return <h2>Student not found!</h2>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateStudent({ id, name, email, course });
    navigate('/');  // Redirect to dashboard after update
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="C#">C#</option>
          <option value="SQL">SQL</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Node.js">Node.js</option>
        </select>
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
