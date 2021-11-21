function attachEvents() {

    const authToken = sessionStorage.getItem('authToken');


    if (authToken !== null) {
        document.getElementById('loginLink').textContent = 'Logout'
        document.getElementById('addBtn').disabled = false;
    }

    document.getElementById('loginLink').addEventListener('click', () => {
        if (authToken !== null) {
            logout(authToken);
            location.replace('index.html')
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('userId');
        } else {
            location.replace('login.html')
        }
    })
    document.getElementById('mainTarget').addEventListener('click', (ev) => {
        const userId = sessionStorage.getItem('userId')
        const id = ev.target.parentNode.id;
        const ownerId = ev.target.parentNode.dataset.owner;


        if (ev.target.className === 'update') {
            const parent = ev.target.parentNode
            if (userId === ownerId) {
                updateCatch(id, authToken, parent);
            } else {
                alert('Only the creator of the log is able to update it!')
                throw new Error('Only the creator of the log is able to update it!')
            }
        } else if (ev.target.className === 'delete') {
            if (userId === ownerId) {
                deleteCatch(id, authToken);
            } else {
                alert('Only the creator of the log is able to delete it!')
                throw new Error('Only the creator of the log is able to delete it!')
            }
        } else if (ev.target.className === 'add') {
            createCatch(authToken);
        } else if (ev.target.className === 'load') {
            getAllCatches();
        }
    })
}

async function logout(authToken) {

    await fetch('http://localhost:3030/users/logout/', {
        method: 'GET',
        headers: {
            'X-Authorization': authToken
        }
    })
}

attachEvents();

async function createCatch(authToken) {

    const fishLog = {}
    const hitInfo = document.querySelectorAll('#addForm>input');  //връща nodeList
    for (const val of hitInfo.values()) {
        fishLog[val.className] = val.value;
    }

    await fetch('http://localhost:3030/data/catches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': authToken
        },
        body: JSON.stringify(fishLog)
    })

    document.querySelectorAll('#addForm>input').forEach(e => e.value = '')
    getAllCatches();
}

async function updateCatch(id, authToken, parent) {

    const [angler, weigth, species, location, bait, captureTime] = Array.from(parent.querySelectorAll('input')).map(e => e.value)

    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': authToken
        },
        body: JSON.stringify({ "angler": angler, "weight": weigth, "species": species, "location": location, "bait": bait, "captureTime": captureTime })
    }) 

    getAllCatches();
}
async function deleteCatch(id, authToken) {

    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete',
        headers: { 'X-Authorization': authToken }
    })

    getAllCatches()
}
async function getAllCatches() {

    document.getElementById('catches').innerHTML = '';
    const response = await fetch('http://localhost:3030/data/catches');
    const data = await response.json();

    data.forEach(e => renderCatches(e));

    if (sessionStorage.getItem('authToken') != null) {
        Array.from(document.getElementsByTagName('button')).forEach(e => e.disabled = false);
    }
}

async function renderCatches(e) {
    const div = document.createElement('div');
    div.dataset.owner = e._ownerId;
    div.id = e._id;
    div.className = 'catch';
    div.innerHTML = `<label>Angler</label>
    <input type="text" class="angler" value="${e.angler}" />
    <hr>
    <label>Weight</label>
    <input type="number" class="weight" value="${e.weight}" />
    <hr>
    <label>Species</label>
    <input type="text" class="species" value="${e.species}" />
    <hr>
    <label>Location</label>
    <input type="text" class="location" value="${e.location}" />
    <hr>
    <label>Bait</label>
    <input type="text" class="bait" value="${e.bait}" />
    <hr>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${e.captureTime}" />
    <hr>
    <button disabled class="update">Update</button>
    <button disabled class="delete">Delete</button>`;

    document.getElementById('catches').appendChild(div);
}
