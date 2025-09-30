const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleTheme.checked = true;
}

toggleTheme.addEventListener('change', () => {
    if (toggleTheme.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});