function modernTimesOfHashTag(str) {

    let result = [];
    let collecting = false;
    let currentWord = '';

    for (let char of str) {
        if (collecting) {
            if (char === ' ') {
                if (currentWord.length > 0) {
                    result.push(currentWord);
                }
                collecting = false;
                currentWord = '';
            } else {
                let code = char.charCodeAt(0);
                if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                    currentWord += char;
                } else {
                    collecting = false
                }
            }
        } else if (char === '#') {
                collecting = true;
            }
        
    }

    if (collecting && currentWord.length > 0) {
        result.push(currentWord)
    }

    for (const word of result) {
        console.log(word)
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')