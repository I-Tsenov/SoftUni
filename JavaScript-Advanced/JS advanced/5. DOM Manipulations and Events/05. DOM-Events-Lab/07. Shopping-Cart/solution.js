function solve() {
   const cart = [];
   const output = document.querySelector('textarea');
   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {

      if (ev.target.tagName === 'BUTTON' && ev.target.className === 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({ title, price });

         output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
      }
   });

   document.querySelector('.checkout').addEventListener('click', () => {
      const result = cart.reduce((acc, c) => {
         acc.items.push(c.title);
         acc.total += c.price; 
         return acc;
      }, { items: [], total: 0 });

      const [...products] = new Set(result.items);
      output.value += `You bought ${products.join(', ')} for ${result.total.toFixed(2)}.`;

      [...document.querySelectorAll('button')].forEach(b => b.disabled = true)   // деактивираме всички бутони на страницата
   });
}

/*    АЛТЕРНАТИВНО РЕШЕНИЕ


function solve() {
   let output = document.getElementsByTagName('textarea')[0];
   let cart = [];
   output.textContent = "";

   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   document.getElementsByClassName('checkout')[0].addEventListener('click', onCheckout);

   function onClick(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
         let product = ev.target.parentNode.parentNode;
         console.log(product)
         let name = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);

         cart.push({ name, price });

         output.value += `$Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }
   }

   function onCheckout() {
      let products = new Set();
      cart.forEach(p => products.add(p.name));

      let total = cart.reduce((t, c) => t + c.price, 0);
      
      output.value += `You bought ${Array.from(products).join(', ')} for ${total.toFixed(2)}.`;

      [...document.querySelectorAll('button')].forEach(b => b.disabled = true)   // деактивираме всички бутони на страницата
   }
}
*/