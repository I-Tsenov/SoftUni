function solve() {
  let result = '';
  let inputText = document.getElementById('text').value
  const casing = document.getElementById('naming-convention').value

  switch (casing) {
    case 'Camel Case': toCamelCase(inputText); break;
    case 'Pascal Case': toPascalCase(inputText); break;
    default: document.getElementById('result').textContent = 'Error!'
  }


  function toCamelCase(inputText) {
    result = inputText.toLowerCase().split(' ')
    
    for (let i = 1; i < result.length; i++) {
      let currentWord = result[i];
      result[i] = currentWord[0].toUpperCase() + currentWord.slice(1)
    }

      document.getElementById('result').textContent = result.join('');
  }

  function toPascalCase(inputText) {
    result = inputText.toLowerCase().split(' ')
    
    for (let i = 0; i < result.length; i++) {
      let currentWord = result[i];
      result[i] = currentWord[0].toUpperCase() + currentWord.slice(1)
    }

      document.getElementById('result').textContent = result.join('');

  }
}