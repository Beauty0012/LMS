import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dashboard-container ${theme}`}>
      <h1>Student Enrollment Dashboard</h1>
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </button>
    </div>
  );
};

export default Dashboard;
