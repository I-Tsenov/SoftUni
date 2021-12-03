// Задачата работи, css-a е счупен !!!

import { render, html } from '../node_modules/lit-html/lit-html.js'

const endpoint = 'http://localhost:3030/jsonstore/advanced/table'
const tableBody = document.querySelector('tbody');
const match = document.getElementById('searchField');
initialize();

const rowTemplate = (student, select) => html`
   <tr class=${select ? 'select' : ''}>
      <th>${student.firstName} ${student.lastName}</th>
      <th>${student.email}</th>
      <th>${student.course}</th>
   </tr>
   `

async function initialize() {
   document.getElementById('searchBtn').addEventListener('click', () => {
      update(list, match.value.toLowerCase())
   })
   const response = await fetch(endpoint);
   const data = await response.json();
   const list = Object.values(data);

   update(list)
}

function update(list, match = '') {
   const result = list.map(s => rowTemplate(s, compare(s, match)))
   render(result, tableBody)
}

function compare(item, match) {
   return Object.values(item).some(v => match && v.toLowerCase().includes(match))
}