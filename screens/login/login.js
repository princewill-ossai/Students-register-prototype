const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const statusMessage = document.getElementById('status');
statusMessage.style.display = 'none';

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Email verification regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        statusMessage.style.display = 'block';
        statusMessage.style.backgroundColor = 'red';
        statusMessage.textContent = 'Invalid email format.';
        setTimeout(() => { statusMessage.style.display = 'none'; }, 4000);
        return;
    } else {
        statusMessage.style.display = 'block';
        statusMessage.style.backgroundColor = 'green';
        statusMessage.textContent = 'Login successful!';
    }

    // Password verification regex
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        statusMessage.style.display = 'block';
        statusMessage.style.backgroundColor = 'red';
        statusMessage.textContent = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.';
        setTimeout(() => { statusMessage.style.display = 'none'; }, 4000);
        return;
    } else {
        statusMessage.style.display = 'block';
        statusMessage.style.backgroundColor = 'green';
        statusMessage.textContent = 'Login successful!';
    }

    setTimeout(() => {
        window.location.href = '../dashboard/newSession.html';
    }, 1000)
});

