// Factory function to create student object
function createStudentListTable(photo, name, email, status) {
  return {
    photo: photo || '',
    name,
    email,
    status,
  }
}

// Handle adding student
const btn = document.getElementById('btn');

if (btn) {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    const fnameInput = document.getElementById('fname');
    const emailInput = document.getElementById('email');
    const photoInput = document.getElementById('photo');

    const fname = fnameInput ? fnameInput.value : '';
    const email = emailInput ? emailInput.value : '';

    const addStudent = (photo) => {
      const student = createStudentListTable(photo, fname, email, 'Present');

      // Get current session and add student to it
      const currentDate = localStorage.getItem('currentSessionDate');
      let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

      const index = sessions.findIndex(s => s.date === currentDate);
      if (index !== -1) {
        sessions[index].students.push(student);
      } else {
        sessions.push({ date: currentDate, students: [student] });
      }

      localStorage.setItem('sessions', JSON.stringify(sessions));

      if (fnameInput) fnameInput.value = '';
      if (emailInput) emailInput.value = '';
      if (photoInput) photoInput.value = '';
    };

    if (photoInput && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        addStudent(e.target.result);
      };
      reader.readAsDataURL(photoInput.files[0]);
    } else {
      addStudent('');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tableData = document.getElementById('table-body');
  const sessionDateEl = document.getElementById('session-date');

  const currentDate = localStorage.getItem('currentSessionDate');
  const sessions = JSON.parse(localStorage.getItem('sessions')) || [];
  const session = sessions.find(s => s.date === currentDate);

  // Show date
  if (sessionDateEl) {
    sessionDateEl.textContent = currentDate
      ? `Session Date: ${currentDate}`
      : 'No session selected';
  }

  // Show students
  if (tableData) {
    if (session && session.students.length > 0) {
      tableData.innerHTML = ''; 
      session.students.forEach((student) => {
        tableData.innerHTML += `
        <tr>
          <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border">
            <img src="${student.photo}" alt="Student Photo" class="w-12 h-12 rounded-sm object-cover ">
          </td>
          <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border font-bold">${student.name}</td>
          <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border font-bold break-words">${student.email}</td>
          <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border font-bold text-green-600 font-medium">${student.status}</td>
        </tr>`;
      });
    } else {
      tableData.innerHTML = `<tr><td colspan="4" class="text-center py-4">No students for this session yet</td></tr>`;
    }
  }
});

// Handle starting a new session from newSession.html
const startSessionBtn = document.getElementById('starSessionBtn');
if (startSessionBtn) {
  startSessionBtn.addEventListener('click', () => {
    
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];

    let session = sessions.find(s => s.date === today);
    if (!session) {
      sessions.push({ date: today, students: [] });
      localStorage.setItem('sessions', JSON.stringify(sessions));
    }

    localStorage.setItem('currentSessionDate', today);

    window.location.href = './index.html';
  });
}
