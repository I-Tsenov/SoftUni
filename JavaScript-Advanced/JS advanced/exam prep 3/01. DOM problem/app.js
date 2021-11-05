function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');
    const openSection = document.querySelector('section .orange').parentNode.nextElementSibling;
    const inProgressSection = document.getElementById('in-progress');
    const completeSection = document.querySelector('section .green').parentNode.nextElementSibling;

    console.log(completeSection)
    document.getElementById('add').addEventListener('click', onAdd)


    function onAdd(ev) {
        ev.preventDefault();

        if (task.value === '' || description.value === '' || date.value === '') {
            alert('All fields are being required!')
            return;
        }

        let article = e('article', {},
            e('h3', {}, task.value),
            e('p', {}, `Description: ${description.value}`),
            e('p', {}, `Due Date: ${date.value}`),
            e('div', { className: 'flex' },
                e('button', { className: 'green', onClick: onStart }, 'Start'),
                e('button', { className: 'red', onClick: onDel }, 'Delete')))

        openSection.appendChild(article);

        ev.target.parentNode.reset();
    }

    function onStart(ev) {
        const article = ev.target.parentNode.parentNode;
        const btnDiv = ev.target.parentNode;
        btnDiv.remove();

        let newBtnDiv = e('div', { className: 'flex' },
            e('button', { className: 'red', onClick: onDel }, 'Delete'),
            e('button', { className: 'orange', onClick: onFinish }, 'Finish'));

        article.appendChild(newBtnDiv);
        inProgressSection.appendChild(article);
    }

    function onFinish(ev) {
        ev.target.parentNode.remove()
        completeSection.appendChild(inProgressSection.querySelector('article'))
    }

    function onDel(ev) {
        ev.target.parentNode.parentNode.remove();
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