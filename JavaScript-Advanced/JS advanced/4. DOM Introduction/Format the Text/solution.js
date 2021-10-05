function solve() {
  let input = document.querySelector('#input').value;
  let output = document.querySelector('#output');

  sentences = input.split('.').filter(e => e !== '');
  let paragraph = '';
  let counter = 0;

  for (let i = 0; i < sentences.length; i++) {
    let parHTML = document.createElement('p')
    paragraph += `${sentences[i]}.`;
    counter++;

    if (i === sentences.length - 1) {
      parHTML.textContent = paragraph;
      output.appendChild(parHTML)
    }

    if (counter % 3 === 0) {
      parHTML.textContent = paragraph;
      output.appendChild(parHTML)
      paragraph = '';
    }
  }
}

// АЛТЕРНАТИВНО РЕШЕНИЕ (чуждо)

// function solve() {
//   const inputText = document.getElementById('input').value;
//   const outputElement = document.getElementById('output');

//   inputText
//     .match(/(?:\s*)([^.!?]+[.!?]+)/g)
//     .map(sentence => sentence.trim())
//     .reduce((acc, sentence, index) => {
//       if (index % 3 === 0) { acc.push([sentence]); } else { acc[acc.length - 1].push(sentence); }
//       return acc;
//     }, [])
//     .forEach(paragraph => {
//       let parHTML = document.createElement('p');
//       parHTML.textContent = paragraph;
//       outputElement.appendChild(parHTML);
//     });
// }
