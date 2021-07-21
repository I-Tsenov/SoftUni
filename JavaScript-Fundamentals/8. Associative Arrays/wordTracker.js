function wordTracker(input) {

    let wantedWords = input.shift().split(' ');
    let bookOfEquality = {};

    wantedWords.forEach(word => {
        let counter = 0;
        input.forEach(dublet => {
            if (word.toLowerCase() === dublet.toLowerCase()) {
                counter++;
            }
            bookOfEquality[word] = counter;
        })
    });

    let sorted = Object.entries(bookOfEquality);

    sorted.sort((a, b) => {
        countA = a[1];
        countB = b[1];

        return countB - countA;
    })

    for (let [word, value] of sorted) {
        console.log (`${word} - ${value}`)
    }

}

wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])