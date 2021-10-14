function lockedProfile() {

    [...document.querySelectorAll('button')].forEach(b => b.addEventListener('click', (ev) => {
        const parentDiv = ev.target.parentNode;
        const user = parentDiv.querySelector('div');

        if (isUnlocked() && ev.target.textContent === 'Show more') {
            user.style.display = 'block';
            ev.target.textContent = 'Hide it';
        } else if (ev.target.textContent === 'Hide it' && isUnlocked()) {
            user.style.display = 'none';
            ev.target.textContent = 'Show more';
        }

        function isUnlocked() {
            return parentDiv.querySelector('[value="unlock"]').checked
        }
    }))
}