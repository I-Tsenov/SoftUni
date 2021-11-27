import { html, render } from '../node_modules/lit-html/lit-html.js';

const input = document.getElementById('towns');
const root = document.getElementById('root');
const form = document.querySelector('form')

const listTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;

form.addEventListener('submit', onLoad)

function onLoad(ev) {
    ev.preventDefault();

    const townsAsString = input.value;
    const towns = townsAsString.split(',').map(x => x.trim())
    const result = listTemplate(towns);
    render(result, root)
    form.reset()
}