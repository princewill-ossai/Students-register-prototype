// Factory function to create dashboard table

function createStudentListTable(photo, name, email, status) {
    return {
        photo: photo || '',
        name,
        email,
        status,
    }
}

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

            // Retrieve existing students from localStorage or initialize an empty array
            const students = JSON.parse(localStorage.getItem('students')) || [];
            students.push(student);

            localStorage.setItem('students', JSON.stringify(students));

            // Optionally clear the form fields after adding a student
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

    if (tableData) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.forEach((student) => {
            tableData.innerHTML += `
            <tr>
            <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border">
              <img src="${student.photo}" alt="Student Photo" class=" w-12 h-12 object-cover ">
            </td>
            <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border font-bold">${student.name}</td>
            <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border font-bold break-words">${student.email}</td>
            <td class="px-4 dark:text-white dark:bg-gray-700 dark:border-gray-500 py-2 border font-bold text-green-600 font-medium">${student.status}</td>
          </tr>
            `
        })
    }
});


