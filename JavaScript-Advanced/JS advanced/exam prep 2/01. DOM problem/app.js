window.addEventListener('load', solve);

function solve() {

    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const desc = document.getElementById('description');
    const price = document.getElementById('price');
    const tableList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('tfoot .total-price');

    document.getElementById('add').addEventListener('click', onAdd)

    tableList.addEventListener('click', (ev) => {
        const hiddenInfo = ev.target.parentNode.parentNode.nextSibling;
        const mainInfo = hiddenInfo.previousSibling;
        const button = ev.target;

        if (ev.target.className === 'moreBtn') {

            onDetails(hiddenInfo, button);
        }

        if (ev.target.className === 'buyBtn') {
            const currentPrice = mainInfo.querySelectorAll('td')[1].textContent
            onBuy(hiddenInfo, button, currentPrice);
        }
    })

    function onAdd(ev) {
        ev.preventDefault();

        if (model.value === "" || desc.value === "" || price.value.length === 0 || year.value.length === 0) {
            alert ('All fields must be filled!')
            throw new Error ('All fields must be filled!')
        } 
    
        if (year.value < 1 || price.value < 1) {
            alert('Year and Price have to be positive numbers!')
            throw new Error ('Year and Price have to be positive numbers!')
        }

        renderRow();
        ev.target.parentNode.reset()
    }

    function onBuy(hiddenInfo, button, currentPrice) {
        totalPrice.textContent = (Number(totalPrice.textContent) + Number(currentPrice)).toFixed(2);
        button.parentNode.parentNode.remove();
        hiddenInfo.remove();
    }

    function onDetails(hiddenInfo, button) {

        if (button.textContent === 'More Info') {
            button.textContent = 'Less Info';
            hiddenInfo.style.display = 'contents';
        } else if (button.textContent === 'Less Info') {
            button.textContent = 'More Info';
            hiddenInfo.style.display = 'none';
        }
    }

    function renderRow() {

        price.value = Number(price.value).toFixed(2)

        const mainInfo =
            e('tr', { className: 'info' },
                e('td', {}, model.value),
                e('td', {}, price.value),
                e('td', {},
                    e('button', { className: 'moreBtn' }, 'More Info'),
                    e('button', { className: 'buyBtn' }, 'Buy it')));

        const hiddenInfo =
            e('tr', { className: 'hide' },
                e('td', {}, `Year: ${year.value}`),
                e('td', { colSpan: "3" }, `Description: ${desc.value}`));

        tableList.appendChild(mainInfo);
        tableList.appendChild(hiddenInfo);
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);
    
        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }
    
        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
    
        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });
    
        return result;
    }
}


