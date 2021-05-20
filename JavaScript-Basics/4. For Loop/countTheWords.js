function countTheWords(input) {
    let text = input[0];
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        let currentChar = text[i];
        if (currentChar === " ") {
            count += 1
        }
    }
    count += 1;  
    /* понеже броим празните пространства в изречението, 
    то те ще са винаги по-малко с 1 от думите => добавяме 1, за да намерим колко са думите */
    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`)
    } else {
        console.log("The message was send successfully!");
    }
}

countTheWords(["This message has exactly eleven words. One more as it's allowed!"]);
countTheWords(["This message has ten words and you can send it!"])