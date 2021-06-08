function maxEqualSeq(array) {

    let maxSeq = [];

    for (let i = 0; i < array.length; i++) {

        let currentSeq = [array[i]];

        for (let j = i + 1; j < array.length; j++) {
            
            if (array[i] === array[j]) {
                currentSeq.push(array[j]);
            } else {
                break;
            }
        }

        if (currentSeq.length > maxSeq.length) {
            maxSeq = currentSeq;
        }
    }
    console.log(maxSeq.join(" "));
}

maxEqualSeq([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);