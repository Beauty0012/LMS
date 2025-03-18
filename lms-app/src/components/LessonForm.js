import React, { useState } from "react";
import { addLesson } from "../services/lessonService"; // ✅ Correct import

const LessonForm = ({ onLessonAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState(""); // Add video URL state
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error

    try {
      const newLesson = await addLesson({ title, description, videoUrl }); // ✅ Await the lesson addition

      if (onLessonAdded) {
        onLessonAdded(newLesson); // ✅ Pass the new lesson to parent
      }

      setTitle("");
      setDescription("");
      setVideoUrl("");
    } catch (err) {
      setError("Failed to add lesson. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h3>Add New Lesson</h3>
      {error && <p style={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Lesson Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Lesson Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
        />
        <button type="submit">Add Lesson</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    maxWidth: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  error: {
    color: "red",
  },
};

export default LessonForm;
