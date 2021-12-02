import { html, render } from '../node_modules/lit-html/lit-html.js'

const selectTemplate = (list) => html`
<select id="menu">
    ${list.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>
`
const main = document.querySelector('div');
const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const input = document.getElementById('itemText')
initialize()

async function initialize() {
    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list))

    const response = await fetch(endpoint);
    const data = await response.json();
    const list = Object.values(data)    // създаваме локално, с цел кеширане

    update(list)
}

function update(list) {
    const result = selectTemplate(list);
    render(result, main)
}

async function addItem(ev, list) {
    ev.preventDefault();

    const item = {
        text: input.value
    }
    
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });
    
    const result = await response.json();
    list.push(result);
    
    update(list);
    input.value = '';
}




/*  ПЪРВОНАЧАЛНО РЕШЕНИЕ - да се разкоментира в HTML


const optMenu = document.getElementById('menu');
const input = document.getElementById('itemText')
document.querySelector('form').addEventListener('submit', addItem)

async function updateTowns() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();

    let towns = Object.values(data);
    towns = towns.map(({ text, _id }) => html`<option value=${_id}>${text}</option>`)
    render(towns, optMenu)
}

updateTowns()

async function addItem(ev) {
    ev.preventDefault();
    
    const item = {
        text: input.value
    }

    input.value = '';

    await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    });

    updateTowns()
}
*/