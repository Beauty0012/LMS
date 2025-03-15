export const fetchEnrollments = async () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ name: "PJ", course: "Web Dev" }]), 500)
  );
};
S