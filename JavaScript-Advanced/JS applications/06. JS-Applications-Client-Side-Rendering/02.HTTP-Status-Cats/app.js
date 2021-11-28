import { cats } from './catSeeder.js'
import { html, render } from '../node_modules/lit-html/lit-html.js'
import {styleMap} from '../node_modules/lit-html/directives/style-map.js'

const catTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
        <div class="status" style=${styleMap({display: cat.info ? 'block' : 'none'})} id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`

const outputSection = document.getElementById('allCats')
cats.map(c => c.info = false);
update();


function update () {

    const ulTemplate = html`
    <ul @click = ${onToggle}>
        ${cats.map(c => catTemplate(c))}
    </ul>
    `
    render(ulTemplate, outputSection)
}

function onToggle(ev) {

    if(ev.target.classList.contains('showBtn')) {
        let currentCatId = ev.target.nextElementSibling.id;
        let cat = cats.find(c => c.id === currentCatId);
        cat.info = !cat.info;
        update()
    }
}