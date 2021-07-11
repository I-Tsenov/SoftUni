function treasureHunt(input) {

    let avrgTreasureGain = 0;

    const actions = {
        Drop,
        Steal,
        Loot
    };

    let chest = input.shift().split('|');

    while ((command = input.shift()) !== 'Yohoho!') {

        let [action, ...params] = command.split(' ');

        actions[action](...params)
    }

    for (const item of chest) {
        avrgTreasureGain += item.length / chest.length;
    }

    if (chest.length !== 0) {
        return `Average treasure gain: ${avrgTreasureGain.toFixed(2)} pirate credits.`
    } else {
        return ('Failed treasure hunt.');
    }

    function Drop(index) {

        index = Number(index)
        if (!(index > chest.length - 1 || index < 0)) {

            let item = chest.splice(index, 1)
            chest.push(item[0]);
        }
    }

    function Steal(count) {
        count = Number(count)
        let stolenItems = chest.splice(-count, count)
        console.log(stolenItems.join(', '));
    }

    function Loot(...params) {
        for (const param of params) {
            if (!chest.includes(param))
            chest.unshift(param)
        }
    }
}

console.log(treasureHunt((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])))

console.log('-----------------')

console.log(treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])))