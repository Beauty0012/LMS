export const enrollStudent = async (studentData) => {
  try {
    const response = await fetch("http://localhost:5000/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData)
    });

    return await response.json();
  } catch (error) {
    console.error("Enrollment failed:", error);
  }
};
