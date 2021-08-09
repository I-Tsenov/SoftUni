function revealWords(words, text) {

    words = words.split(', ')
    text = ` ${text} `
    for (let word of words) {

        let match = ` ${'*'.repeat(word.length)} `;
        word = ` ${word} `;
        text = text.replace(match, word)
    }

    console.log(text.trim());
}

revealWords('great',
    'softuni is ***** place for learning new programming languages')