const telephone = document.querySelector('#tel');
const telephoneError = document.querySelector('.tel-error');
telephone.addEventListener('input', function () {
    let telRegex = RegExp('^[1-9]{1,2}\\s{1}[0-9]{10}$');
    if (telRegex.test(telephone.value))
        telephoneError.textContent = "";
    else
        telephoneError.textContent = "Incorrect Contact Details.";
});

