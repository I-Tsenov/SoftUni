function addItem() {
    let input = document.getElementById('newItemText');
    let unorderedList = document.getElementById('items');
    let element = document.createElement('li')
    
    if (input.value !== '') {
        element.textContent = input.value
        unorderedList.appendChild(element)
        input.value = ''
    }
}