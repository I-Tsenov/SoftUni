function pascalCaseSplitter(text) {

    let result = [];
    let lowerText = text.toLocaleLowerCase();
    let word = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== lowerText[i]) {
            if (word.length > 0) {
                result.push(word);
            }
            word = text[i]
        } else {
            word += text[i]
        }
    }

    if (word.length > 0) {
        result.push(word);
    }
    
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')