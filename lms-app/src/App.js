import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent'; // Make sure this is imported
import './styles.css';

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard students={students} onDelete={deleteStudent} />} />
        <Route path="/add-student" element={<AddStudent onAddStudent={addStudent} />} />
        <Route path="/edit-student/:id" element={<EditStudent students={students} onUpdateStudent={updateStudent} />} />
      </Routes>
    </Router>
  );
}

export default App;


