document.addEventListener('DOMContentLoaded', () => {


    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const fname = document.getElementById('firstName').value
        const mname = document.getElementById('middleName').value
        const lname = document.getElementById('lastName').value
        const regNum = document.getElementById('regNumber').value
        const btn = document.getElementById('btn')

        if (fname && lname && mname && regNum !== "") {
            window.location.href = "../dashboard/index.html"
        } else {
            alert("Please fill all inputs")
        }
    })
})