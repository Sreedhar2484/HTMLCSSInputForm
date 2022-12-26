/*
Rule1 – minimum 8 Characters
Rule2 – Should have at least 1
Upper Case
Rule3 – Should have at least 1
numeric number in the password
Rule4 – Has exactly 1 Special
Character
- NOTE – All rules must be passed
*/
const password = document.querySelector('#pwd');
const passwordError = document.querySelector('.pwd-error');
password.addEventListener('input', function () {
    let passwordRegex = RegExp('^(?=.*[A-z])(?=.*[0-9])(?=.*[@#$%^&*()-+=])([a-zA-Z0-9@._-]).{8,}$')
    if (passwordRegex.test(password.value))
        passwordError.textContent = "";
    else
        passwordError.textContent = "Invalid Password";
}); 