// validation is made in the html file !!!

const form = document.getElementById('form')
const url = "http://localhost:3030/jsonstore/collections/students"

// displayin' all students
async function getStudents() {
    const response = await fetch(url);
    const data = await response.json()

    Object.values(data).map(s => renderTable(s))
}

getStudents()

// creating new student logic
form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const facultyNumber = formData.get("facultyNumber");
    const grade = Number(formData.get("grade"));

    const response = await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });

    const data = await response.json();
    renderTable(data)

    form.reset()
})

// creating the html structure for each student
function renderTable({ firstName, lastName, facultyNumber, grade }) {
    const table = document.querySelector('tbody');
    const row = document.createElement('tr');
    const firstNameTD = document.createElement('td')
    const lastNameTD = document.createElement('td')
    const facultyNumberTD = document.createElement('td')
    const gradeTD = document.createElement('td')
    firstNameTD.textContent = `${firstName}`;
    lastNameTD.textContent = `${lastName}`;
    facultyNumberTD.textContent = `${facultyNumber}`;
    gradeTD.textContent = `${grade}`;
    row.appendChild(firstNameTD);
    row.appendChild(lastNameTD);
    row.appendChild(facultyNumberTD);
    row.appendChild(gradeTD);
    table.appendChild(row)
}