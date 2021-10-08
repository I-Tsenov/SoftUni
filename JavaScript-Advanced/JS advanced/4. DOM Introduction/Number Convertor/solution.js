function solve() {

    const numberInput = document.getElementById('input');
    const output = document.getElementById('result');
    let selectMenuTo = document.getElementById('selectMenuTo');
    
    let optionBinary = document.createElement('option');
    let optionHexadecimal = document.createElement('option');
    optionBinary.setAttribute('value', 'binary');
    optionBinary.textContent = 'Binary';
    optionHexadecimal.setAttribute('value', 'hexadecimal');
    optionHexadecimal.textContent = 'Hexadecimal';
    
    selectMenuTo.appendChild(optionBinary);
    selectMenuTo.appendChild(optionHexadecimal);
    
    document.querySelector('button').addEventListener("click", convert);

    function convert() {
        if (selectMenuTo.value === 'binary') {
            output.value = Number(numberInput.value).toString(2)
        } else if (selectMenuTo.value === 'hexadecimal') {
            output.value = Number(numberInput.value).toString(16).toLocaleUpperCase();
        }
    }
}