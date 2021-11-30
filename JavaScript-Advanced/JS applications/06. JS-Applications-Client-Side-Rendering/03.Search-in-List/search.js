import { towns } from './towns.js'
import { render, html } from '../node_modules/lit-html/lit-html.js'

const searchTemplate = (towns, match) => html`
   <article>
      <div id="towns">
         <ul>
            ${towns.map(t => itemTemplate(t, match))}
         </ul>
      </div>
      <input type="text" id="searchText" .value=${match} />
      <button @click=${search}>Search</button>
      <div id="result">${countMatches(towns, match)}</div>
   </article>`

const itemTemplate = (name, match) => html`<li class=${match && name.toLowerCase().includes(match.toLowerCase()) ? 'active' : '' }>${name}</li>`

const main = document.body;
update();

function update(match = '') {
   const result = searchTemplate(towns, match);
   render(result, main)
}

function search(event) {
   const match = event.target.parentNode.querySelector('input').value;
   update(match)
}

function countMatches(towns, match) {
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   if (matches) {
      return `${matches} matches found`
   } else {
      return '';
   }
}


/*  ПЪРВОНАЧАЛНО РЕШЕНИЕ  (нужно е да разкоментираме article в хтмл)

const container = document.getElementById('towns');
const input = document.getElementById('searchText');
const matchResult = document.getElementById('result');
update();

document.querySelector('button').addEventListener('click', search);

function update() {

   const listOfTownsTemplate = html`
   <ul>
      ${towns.map(t => html`<li>${t}</li>`)}
   </ul>`

   render(listOfTownsTemplate, container)
}

function search() {
   const toBeMatched = (input.value).toLowerCase();
   input.value = ''
   const listOfTowns = Array.from(container.querySelectorAll('ul li'));

   listOfTowns.map(t => t.className = '');
   const matchedTowns = listOfTowns.filter(t => t.textContent.toLowerCase().includes(toBeMatched));
   matchedTowns.map(t => t.classList.add('active'));
   render(`${matchedTowns.length} matches found`, matchResult)
   update()
}
*/