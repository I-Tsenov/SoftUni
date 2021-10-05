function extract(content) {

    const text = document.getElementById(content).textContent;
    let matcher = /\((.+?)\)/g;

    let match = matcher.exec(text);
    let result = [];

    while (match !== null) {
        result.push(match[1]);
        match = matcher.exec(text);
    }

    return result.join('; ');
}
