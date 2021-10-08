function search() {
   const input = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let towns = [...document.querySelectorAll('ul li')];

   let matchCounter = 0;

   for (let town of towns) {
      if ((town.textContent).toLowerCase().includes(input.toLowerCase())) {
         matchCounter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }

   result.textContent = `${matchCounter} matches found`
}
