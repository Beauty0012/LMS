app.post("/enroll", async (req, res) => {
    const { studentName, course } = req.body;
    const courseData = courses.find(c => c.title === course);
  
    // Prevent over-enrollment
    if (courseData.enrolled >= courseData.capacity) {
      return res.status(400).json({ message: "Course is full" });
    }
  
    courseData.enrolled += 1;
    enrollments.push({ studentName, course, timestamp: new Date().toLocaleString() });
    res.json({ message: "Enrollment successful" });
  });
  