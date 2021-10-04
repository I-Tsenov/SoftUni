function extractText() {
    let elements = [...document.getElementsByTagName('li')].map(e => e.textContent);
    document.getElementById('result').value = elements.join('\n')
}