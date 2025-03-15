import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ students, onDelete }) {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Link to="/add-student">
        <button>Add Student</button>
      </Link>
      <ul>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id}>
              {student.id} - {student.name} - {student.email} - {student.course}
              <Link to={`/edit-student/${student.id}`}>
                <button>Edit</button>  {/* Make sure this button exists */}
              </Link>
              <button className="delete" onClick={() => onDelete(student.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No students added yet.</p>
        )}
      </ul>
    </div>
  );
}

export default Dashboard;
