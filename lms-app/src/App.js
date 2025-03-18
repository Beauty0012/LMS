import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Quiz from './components/Quiz';

import JavaQuizQuestions from './components/JavaQuizQuestions';
import PythonQuizQuestions from './components/PythonQuizQuestions';
import Score from './components/Score';  // Import Score component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/java-quiz" element={<JavaQuizQuestions />} />
          <Route path="/python-quiz" element={<PythonQuizQuestions />} />
          <Route path="/score" element={<Score />} />  {/* Add route for Score page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;










