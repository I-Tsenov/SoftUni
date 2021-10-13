function validate() {
    document.getElementById('email').addEventListener('change', onChange);
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/g

    function onChange(ev) {
        if (ev.target.value.match(pattern)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}