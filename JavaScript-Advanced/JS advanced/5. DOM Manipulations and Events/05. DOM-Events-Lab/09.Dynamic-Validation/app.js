function validate() {

    const mailInput = document.getElementById('email');
    const validMailPattern = /^[a-z]+@[a-z]+\.[a-z]+$/g;

    mailInput.addEventListener('change', (ev) => {

        if (validMailPattern.test(mailInput.value)) {
            ev.target.className = '';
        } else {
            ev.target.setAttribute('class', 'error')
        }
    })
}