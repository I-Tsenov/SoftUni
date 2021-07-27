function race(input) {

    let racers = {};
    let positions = ['1st place:', '2nd place:', '3rd place:'];
    let participants = input.shift().split(', ')

    for (const racer of participants) {
        racers[racer] = 0
    }

    for (const text of input) {
        let name = '';
        let distance = 0;

        let patternNums = /\d/g;
        let patternLetters = /[A-Za-z]/g;

        let matchNums = patternNums.exec(text);
        let matchLetters = patternLetters.exec(text);

        while (matchLetters !== null) {
            name += matchLetters[0];
            matchLetters = patternLetters.exec(text)
        }

        if (racers.hasOwnProperty(name)) {

            while (matchNums !== null) {
                distance += Number(matchNums[0]);
                matchNums = patternNums.exec(text)
            }

            racers[name] += distance;
        }
    }

    let sorted = Object.entries(racers);
    sorted.sort((a, b) => b[1] - a[1]);


    for (let i = 0; i < 3; i++) {
        const racer = sorted[i][0];

        console.log(`${positions[i]} ${racer}`)
    }

}

race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])
