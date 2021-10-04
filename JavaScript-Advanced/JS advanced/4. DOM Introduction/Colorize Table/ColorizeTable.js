function colorize() {
   Array.from(document.querySelectorAll('tr:nth-child(even)')).map(e => e.style.backgroundColor = 'teal');
}


// АЛТЕРНАТИВНО РЕШЕНИЕ

/*
function colorize() {
   const elements = Array.from(document.querySelectorAll('table tr'))

   for (let i = 1; i < elements.length; i+=2) {
       const element = elements[i];
       element.style.backgroundColor = 'teal'
   }
   console.log(elements)
}
*/