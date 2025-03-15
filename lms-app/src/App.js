import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import EnrollmentPage from "./pages/EnrollmentPage";
import EnrollmentListPage from "./pages/EnrollmentListPage";
import "./styles/index.css";

const App = () => {
  return (
    <EnrollmentProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<EnrollmentPage />} />
            <Route path="/enrolled-students" element={<EnrollmentListPage />} />
          </Routes>
        </div>
      </Router>
    </EnrollmentProvider>
  );
};

export default App;
