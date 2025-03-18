const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String, // Ensure this field exists
});

module.exports = mongoose.model("Lesson", lessonSchema);
