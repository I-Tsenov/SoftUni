function attachEvents() {

    // event listener for load btn making get request to get the whole phonebook
    document.getElementById('btnLoad').addEventListener('click', loadPhoneBook)
    // event listener for delete btn making delete request 
    document.getElementById('phonebook').addEventListener('click', async (ev) => {

        if (ev.target.className = 'deleteBtn') {
            const id = ev.target.id
            await removeContact(id)

            loadPhoneBook();
        } 
    })
    // event listener for create btn making post request to make a new phoneNumber entry, reload the phonebook
    document.getElementById('btnCreate').addEventListener('click', createContact)

}

// load function
async function loadPhoneBook() {

    document.getElementById('phonebook').innerHTML = '';


    const url = 'http://localhost:3030/jsonstore/phonebook';
    const response = await fetch(url);
    const data = await response.json();

    Object.values(data).map(({ person, phone, _id }) => renderContact(_id, person, phone));

}

// html render function for new phones
function renderContact(id, person, phone) {

    const phonebook = document.getElementById('phonebook');
    const phoneNumber = document.createElement('li');
    const deleteBtn = document.createElement('button');
    phoneNumber.textContent = `${person}: ${phone}`;
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';
    deleteBtn.id = id;
    phoneNumber.appendChild(deleteBtn);
    phonebook.appendChild(phoneNumber);
}

// delete function
async function removeContact(id) {

    const url = 'http://localhost:3030/jsonstore/phonebook/' + id;
    await fetch(url, {
        method: 'delete'
    });
}

// create function
async function createContact() {

    const person = document.getElementById('person').value;
    const phone = document.getElementById('phone').value;

    const url = 'http://localhost:3030/jsonstore/phonebook';
    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ person, phone })
    });

    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

    loadPhoneBook();
}



attachEvents();