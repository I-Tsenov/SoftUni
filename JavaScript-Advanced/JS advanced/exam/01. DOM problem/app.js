window.addEventListener('load', solve);

function solve() {

    const [genre, name, author, date] = Array.from(document.querySelectorAll('form input'));
    const songCollection = document.querySelector('.all-hits-container');
    const savedCollection = document.querySelector('.saved-container');
    const totalLikes = document.querySelector('#total-likes p');
    let likesCount = 0;

    document.getElementById('add-btn').addEventListener('click', onAdd);
    songCollection.addEventListener('click', (ev) => {
        if (ev.target.className === 'save-btn') {
            onSave(ev);
        } else if (ev.target.className === 'like-btn') {
            onLike(ev);
        } else if (ev.target.className === 'delete-btn') {
            onDel(ev);
        }
    })

    savedCollection.addEventListener('click', (ev) => {
        if (ev.target.className === 'delete-btn') {
            onDel(ev);
        }
    })

    function onAdd(ev) {
        ev.preventDefault();

        if (genre.value === '' || name.value === '' || author.value === '' || date.value === '') {
            alert('All fields are required!');
            return;
        }

        const song = renderSong();
        songCollection.appendChild(song);
        ev.target.parentNode.reset();
    }
    function onSave(ev) {
        const currentSong = ev.target.parentNode;
        const [saveBtn, likeBtn, delBtn] = Array.from(currentSong.querySelectorAll('button'));
        saveBtn.remove();
        likeBtn.remove();
        savedCollection.appendChild(currentSong)
    }

    function onLike(ev) {
        console.log(ev.target)
        totalLikes.textContent = `Total Likes: ${++likesCount}`;
        ev.target.disabled = true;
    }

    function onDel(ev) {
        ev.target.parentNode.remove()
    }

    function renderSong() {
        const result =
            e('div', { className: 'hits-info' },
                e('img', { src: './static/img/img.png' }),
                e('h2', {}, `Genre: ${genre.value}`),
                e('h2', {}, `Name: ${name.value}`),
                e('h2', {}, `Author: ${author.value}`),
                e('h3', {}, `Date: ${date.value}`),
                e('button', { className: 'save-btn' }, 'Save song'),
                e('button', { className: 'like-btn' }, 'Like song'),
                e('button', { className: 'delete-btn' }, 'Delete'));

        return result
    }


    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
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


