function validate() {

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confPassword = document.getElementById('confirm-password');
    const submitBtn = document.getElementById('submit');
    const company = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');
    const isValidForm = document.getElementById('valid');

    const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    const emailPattern = /(.)*@(.)*\.(.)*/;
    const passwordPattern = /^[\w]{5,15}$/;

    company.addEventListener('change', () => {
        if (company.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    })

    submitBtn.addEventListener('click', (ev) => {

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = 'red'
        } else {
            username.style.borderColor = ''
        }

        if (!emailPattern.test(email.value)) {
            email.style.borderColor = 'red'
        } else {
            email.style.borderColor = ''
        }

        if (!passwordPattern.test(password.value)) {
            password.style.borderColor = 'red'
        } else {
            password.style.borderColor = ''
        }

        if (password.value === confPassword.value
            && passwordPattern.test(password.value)
            && passwordPattern.test(confPassword.value)) {
            password.style.borderColor = ''
            confPassword.style.borderColor = ''
        } else {
            password.style.borderColor = 'red'
            confPassword.style.borderColor = 'red'
        }

        if (company.checked) {
            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.borderColor = ''
            } else {
                companyNumber.style.borderColor = 'red'
            }
        }

        if ((usernamePattern.test(username.value)
            && emailPattern.test(email.value)
            && passwordPattern.test(password.value)
            && password.value === confPassword.value
            && !company.checked)
            || (usernamePattern.test(username.value)
                && emailPattern.test(email.value)
                && passwordPattern.test(password.value)
                && password.value === confPassword.value
                && company.checked
                && companyNumber.value >= 1000
                && companyNumber.value <= 9999)) {
            isValidForm.style.display = 'block';
        } else {
            isValidForm.style.display = 'none';
        }

        ev.preventDefault();
    })
}
