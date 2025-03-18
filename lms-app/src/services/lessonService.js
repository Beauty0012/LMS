const API_URL = "http://localhost:5001/api/lessons";

export const fetchLessons = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch lessons");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw error;
  }
};

export const addLesson = async (lessonData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lessonData),
    });

    if (!response.ok) {
      throw new Error("Failed to add lesson");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding lesson:", error);
    throw error;
  }
};
export default { fetchLessons, addLesson };

