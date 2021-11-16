async function lockedProfile() {

    const main = document.getElementById('main');
    main.innerHTML = '';
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();
    let counter = 0;

    Object.values(data).forEach(({ age, email, username, _id }) => profileCardRender(age, email, username, _id))

    function profileCardRender(age, email, username, id) {

        counter++

        const result = e('div', { className: 'profile' },
            [
                e('img', { src: "./iconProfile2.png", className: 'userIcon' }),
                e('label', {}, 'Lock'),
                e('input', { type: 'radio', name: `user${counter}Locked`, value: 'lock', checked: true }),
                e('label', {}, 'Unlock'),
                e('input', { type: 'radio', name: `user${counter}Locked`, value: 'unlock' }),
                e('br'),
                e('hr'),
                e('label', {}, 'Username'),
                e('input', { type: 'text', name: `user${counter}Username`, value: `${username}`, disabled: true, readonly: true }),
                e('div', { id: `user${counter}HiddenFields` },
                    [
                        e('hr'),
                        e('label', {}, 'Email'),
                        e('input', { type: 'email', name: `user${counter}Email`, value: `${email}`, disabled: true, readonly: true}),
                        e('label', {}, 'Age:'),
                        e('input', { type: 'email', name: `user${counter}Age`, value: `${age}`, disabled: true, readonly: true})
                    ]),
                e('button', {}, 'Show more')
            ]);

        main.appendChild(result);
    }

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

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, valuee] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), valuee);
            } else {
                result[attr] = valuee;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}