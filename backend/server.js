import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Allow JSON requests

// MongoDB Connection
const MONGO_URI = "mongodb://127.0.0.1:27017/LMS"; // Use 127.0.0.1 instead of localhost
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB LMS Database"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1); // Exit process if DB fails
  });

// Define Lesson Schema
const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: String,
});

const Lesson = mongoose.model("Lesson", lessonSchema);

// Test Route
app.get("/", (req, res) => {
  res.send("✅ Server is running");
});

// Fetch Lessons from MongoDB
app.get("/api/lessons", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lessons", error: error.message });
  }
});

// Add a New Lesson
app.post("/api/lessons", async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const newLesson = new Lesson({ title, description, videoUrl });
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ message: "Error adding lesson", error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5001; // Use dynamic port
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
