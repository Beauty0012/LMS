const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// Fetch all lessons
router.get("/lessons", async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: "Error fetching lessons" });
  }
});

// Add a new lesson
router.post("/lessons", async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body; // Include video URL
    const newLesson = new Lesson({ title, description, videoUrl });
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (error) {
    res.status(500).json({ error: "Error adding lesson" });
  }
});

module.exports = router;
