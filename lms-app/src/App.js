import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import LessonForm from "./components/LessonForm"; // Import LessonForm

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/add-lesson">Add Lesson</Link></li>  {/* Link to add lesson */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/add-lesson" element={<LessonForm />} /> {/* Route for adding lessons */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
