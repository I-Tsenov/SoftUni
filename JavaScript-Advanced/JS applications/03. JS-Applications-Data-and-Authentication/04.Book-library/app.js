async function attachEvents() {

    // event listener for loadBooks btn, which refreshes the list
    document.getElementById('loadBooks').addEventListener('click', getBooks);
    // event listener using delegation for edit and delete buttons on every book
    document.querySelector('tbody').addEventListener('click', (ev) => {
        const id = ev.target.id

        if (ev.target.className === 'delBtns') {
            const confirmed = confirm('Are you sure you want to delete this book?')
            if (confirmed) {
                deleteBook(id)
            }
        } else if (ev.target.className === 'editBtns') {
            document.getElementById('createForm').style.display = 'none'
            document.getElementById('editForm').style.display = 'block'
            editBook(id)
        }
    })
    // event listener submit for the createForm, creating new book entry
    document.getElementById('createForm').addEventListener('submit', publishBook);
    // event listener submit for the editForm, updating the target book
    document.getElementById('editForm').addEventListener('submit', updateBook);
    // additional button for better UX / not required
    document.getElementById('cancelBtn').addEventListener('click', (ev) => {
        document.getElementById('createForm').style.display = 'block'
        document.getElementById('editForm').style.display = 'none'
        ev.target.reset()
    });
}

attachEvents()

// function to get all books
async function getBooks() {

    document.querySelector('tbody').innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');

    if (response.ok !== true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message)
    }

    const data = await response.json();

    Object.entries(data).map(b => renderBook(b))
}

async function publishBook(ev) {

    ev.preventDefault()

    const formData = new FormData(ev.target);

    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })

    ev.target.reset()
    getBooks()
}

// function to render html book entry 
function renderBook([_id, book]) {

    const { title, author } = book;

    const result =
        e('tr', {},
            [e('td', {}, `${title}`),
            e('td', {}, `${author}`),
            e('td', {},
                [e('button', { className: 'editBtns', id: `${_id}` }, 'Edit'),
                e('button', { className: 'delBtns', id: `${_id}` }, 'Delete')])]);

    return document.querySelector('tbody').appendChild(result);
}


async function deleteBook(id) {

    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete'
    })

    getBooks()

}

async function editBook(id) {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books/' + id)

    const book = await response.json();

    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;

}

async function updateBook(ev) {
    ev.preventDefault()

    const formData = new FormData(ev.target);

    const id = formData.get('id')
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })

    document.getElementById('createForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
    ev.target.reset();

    getBooks();
}

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

