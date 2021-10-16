function addItem() {

    const newText = document.getElementById('newItemText');
    const newValue = document.getElementById('newItemValue');
    const dropDown = document.getElementById('menu')

    const newOption = crtEl('option', newText.value, newValue.value)
    dropDown.appendChild(newOption);

    newText.value = '';
    newValue.value = '';

    function crtEl(type, content, value) {

        const element = document.createElement(type);
  
        if (typeof content === 'string') {
           element.textContent = content;
           element.value = value
        } else {
           element.appendChild(content)
        }
  
        return element;
     }
}