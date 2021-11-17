async function solution() {

    const outputTarget = document.getElementById('main')

    const url = `http://localhost:3030/jsonstore/advanced/articles/list/`;
    const response = await fetch(url)
    const data = await response.json()

    data.forEach(({ _id, title }) => renderArticle(_id, title))

    Array.from(document.getElementsByClassName('button')).forEach(a => a.addEventListener('click', async (ev) => {
        
        const extraDiv = ev.target.parentNode.nextElementSibling
        
        if (ev.target.textContent === 'More') {
            const extraText = await getExtraContent(ev.target.id)
            extraDiv.style.display = 'block';
            ev.target.textContent = 'Less';
            extraDiv.querySelector('p').textContent = extraText
        } else {
            extraDiv.style.display = 'none';
            ev.target.textContent = 'More';
        }
    }))

    function renderArticle(_id, title) {
        const result =
            e('div', { className: 'accordion' },
                [e('div', { className: 'head' },
                    [e('span', {}, `${title}`),
                    e('button', { className: 'button', id: `${_id}` }, 'More')]),
                e('div', { className: 'extra' }, e('p', {}, ''))])

        return outputTarget.appendChild(result)
    }

    async function getExtraContent(id) {
        const url = `http://localhost:3030/jsonstore/advanced/articles/details/` + id;
        const response = await fetch(url);
        const data = await response.json();

        return data.content
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, valuee] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), valuee);
            } else {
                result[attr] = valuee;
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


