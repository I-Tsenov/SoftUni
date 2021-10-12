function addItem() {

    const input = document.getElementById('newItemText');
    const liElement = createElement('li', input.value);

    const deleteBtn = createElement('a', '[Delete]')
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove()})

    liElement.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liElement);
    input.value = '';

    // factory function for creating elements with content
    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}

/*       алтернативно РЕШЕНИЕ

function addItem() {

    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    let deleteBtn = document.createElement('a')
    deleteBtn.textContent = '[Delete]'
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.parentNode.remove()
    })
    liElement.appendChild(deleteBtn);

    if (input.value !== '') {
        document.getElementById('items').appendChild(liElement)
        input.value = ''
    }
}

*/