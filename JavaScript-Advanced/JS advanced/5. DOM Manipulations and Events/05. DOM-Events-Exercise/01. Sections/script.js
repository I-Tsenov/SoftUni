function create(words) {

   const output = document.getElementById('content');
   
   words.forEach(s => {
      const pEl = crtEl('p', s);
      pEl.style.display = 'none';
      const divEl = crtEl('div', pEl);
      divEl.addEventListener('click', () => pEl.style.display = '');
      output.appendChild(divEl);
   });

   function crtEl(type, content) {

      const element = document.createElement(type);

      if (typeof content === 'string') {
         element.textContent = content;
      } else {
         element.appendChild(content)
      }

      return element;
   }
}