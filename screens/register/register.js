// register.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const student = {
      regNumber: document.getElementById("regNumber").value.trim(),
      firstName: document.getElementById("firstName").value.trim(),
      middleName: document.getElementById("middleName").value.trim(),
      lastName: document.getElementById("lastName").value.trim(),
      department: document.getElementById("department").value.trim(),
      studentEmail: document.getElementById("studentEmail").value.trim(),
      photo: document.getElementById("photo").files[0]?.name || "", // just store file name
      date: new Date().toLocaleDateString(),
      status: "Registered"
    };

    // Get existing records from localStorage
    let records = JSON.parse(localStorage.getItem("students")) || [];

    // Add new student
    records.push(student);

    // Save back to localStorage
    localStorage.setItem("students", JSON.stringify(records));

    alert("Student registered successfully!");

    // Redirect to attendance records page
    window.location.href = "../attebdance-record/attendanceResord.html";
  });
});
