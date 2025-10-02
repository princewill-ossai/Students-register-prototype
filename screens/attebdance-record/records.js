// records.js
document.addEventListener("DOMContentLoaded", () => {
  const recordsTable = document.getElementById("recordsTable");

  // Load student records from localStorage
  let records = JSON.parse(localStorage.getItem("students")) || [];

  // Populate table
  records.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="px-6 py-3">${student.firstName} ${student.middleName} ${student.lastName}</td>
      <td class="px-6 py-3">${student.regNumber}</td>
      <td class="px-6 py-3">${student.date}</td>
      <td class="px-6 py-3">${student.status}</td>
    `;

    recordsTable.appendChild(row);
  });
});
