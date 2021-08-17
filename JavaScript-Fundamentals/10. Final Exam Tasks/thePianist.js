function thePianist(input) {

    let actions = {
        Add,
        Remove,
        ChangeKey
    }

    let musicList = {};
    let piecesCount = Number(input.shift());

    for (let i = 0; i < piecesCount; i++) {
        let [title, composer, key] = input.shift().split('|');

        musicList[title] = { composer, key };
    }

    while ((command = input.shift()) !== 'Stop') {
        let [action, title, ...params] = command.split('|');
        actions[action](title, ...params);
    }

    let sorted = Object.entries(musicList).sort((a,b) => {
       let pieceA = a[0];
       let pieceB = b[0];
       let compA = a[1].composer;
       let compB = b[1].composer;

       return pieceA.localeCompare(pieceB) || compA.localeCompare(compB);
    })

    for (let [piece,{composer, key}] of sorted) {
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }

    function Add(title, composer, key) {
        if (musicList[title] === undefined) {
            musicList[title] = { composer, key };
            console.log(`${title} by ${composer} in ${key} added to the collection!`)
        } else {
            console.log(`${title} is already in the collection!`)
        }
    }
    function Remove(title) {
        if (musicList[title] === undefined) {
            console.log(`Invalid operation! ${title} does not exist in the collection.`);
        } else {
            console.log(`Successfully removed ${title}!`)
            delete musicList[title];
        }
    }
    function ChangeKey(title, key) {
        if (musicList[title] === undefined) {
            console.log(`Invalid operation! ${title} does not exist in the collection.`);
        } else {
            musicList[title].key = key
            console.log(`Changed the key of ${title} to ${key}!`)
        }
     }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])