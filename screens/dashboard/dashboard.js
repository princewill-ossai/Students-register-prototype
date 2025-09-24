// Factory function to create dashboard table

function createStudentListTable(photo, name, email, status) {
    return {
        photo: photo || '../assets/student.webp',
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
        const photo = photoInput ? photoInput.value : '';

        const student = createStudentListTable(photo, fname, email, 'Present');

        // Retrieve existing students from localStorage or initialize an empty array
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));

        // Optionally clear the form fields after adding a student
        if (fnameInput) fnameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (photoInput) photoInput.value = '';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tableData = document.getElementById('table-body');

    if (tableData) {
        const students = JSON.parse(localStorage.getItem('students')) || [];
        students.forEach((student) => {
            tableData.innerHTML += `<tr>
                <td><img src="${student.photo}" alt="Student Photo" width="50"></td>
                <td class=" font-bold border px-4 py-2">${student.name}</td>
                <td class=" font-bold border px-4 py-2">${student.email}</td>
                <td class=" font-bold border px-4 py-2 text-green-600 font-medium">>${student.status}</td>
            </tr>`;
        })
    }
});
