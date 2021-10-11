function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      const input = document.querySelector('#searchField').value;

      for (const row of rows) {
         if (row.textContent.includes(input)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}
//When the "Search" button is clicked, go through all cells in the table except for the first row 
//check for both full words and single letters
//If any of the rows contain the submitted string, add a select class to that row. Note that more than one row may contain the given string
//After every search ("Search" button is clicked), clear the input field and remove all already selected classes (if any) from the previous search, 
//in order for the new search to contain only the new result.