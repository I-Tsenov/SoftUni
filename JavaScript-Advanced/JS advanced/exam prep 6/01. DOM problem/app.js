function solve() {

   const author = document.querySelector('#creator');
   console.log(author.value)
   const title = document.querySelector('#title');
   const category = document.querySelector('#category');
   const content = document.querySelector('#content');

   function createArt(author, title, category, content) {
      const targetEl = document.querySelector('main > section')

      const articleEl = document.createElement('article')
      const titleEl = document.createElement('h1')
      titleEl.textContent = title.value;

      const categoryEl = document.createElement('p')
      categoryEl.textContent = 'Category: '
      categoryStrong = document.createElement('strong')
      categoryStrong.textContent = category.value;
      categoryEl.appendChild(categoryStrong)

      const authorEl = document.createElement('p')
      authorEl.textContent = 'Creator: '
      authorStrong = document.createElement('strong')
      authorStrong.textContent = author.value;
      authorEl.appendChild(authorStrong)

      const contentEl = document.createElement('p')
      contentEl.textContent = content.value
      const buttonsDiv = document.createElement('div')
      buttonsDiv.classList.add('buttons')
      const buttonDel = document.createElement('button', 'Delete')
      buttonDel.classList.add('btn', 'delete')
      buttonDel.textContent = 'Delete'
      buttonsDiv.appendChild(buttonDel)
      const buttonArch = document.createElement('button', 'Archive')
      buttonArch.classList.add('btn', 'archive')
      buttonArch.textContent = 'Archive'
      buttonsDiv.appendChild(buttonArch)

      buttonDel.addEventListener('click', (ev) => {
         ev.target.parentNode.parentNode.remove()
      })

      buttonArch.addEventListener('click', (ev) => {
         const art = ev.target.parentNode.parentNode
         const arch = document.querySelector('.archive-section > ol')
         const liEl = document.createElement('li');
         liEl.textContent = art.querySelector('h1').textContent
         arch.appendChild(liEl)
         art.remove();
         Array.from(arch.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(e => arch.appendChild(e))
        
      })

      articleEl.appendChild(titleEl)
      articleEl.appendChild(categoryEl)
      articleEl.appendChild(authorEl)
      articleEl.appendChild(contentEl)
      articleEl.appendChild(buttonsDiv)

      targetEl.appendChild(articleEl)

   }

   document.querySelector(".btn.create").addEventListener('click', (ev) => {
      createArt(author, title, category, content)
      ev.preventDefault()
   })
}
