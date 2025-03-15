import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/courses') // Fetch from fake API
      .then((response) => setCourses(response.data))
      .catch((error) => console.error('Error fetching courses:', error));
  }, []);

  return (
    <div>
      <h2>Available Courses</h2>
      {courses.length === 0 ? (
        <p>Loading courses...</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/course/${course.id}`}>{course.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Courses;
