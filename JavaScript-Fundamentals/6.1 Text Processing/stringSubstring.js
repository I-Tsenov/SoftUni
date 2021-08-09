function stringSubstring (word, text) {
    tokens = text.toLocaleLowerCase().split(' ');
    if (tokens.includes(word.toLocaleLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring ('javascript',
'JavaScript is the best programming language')