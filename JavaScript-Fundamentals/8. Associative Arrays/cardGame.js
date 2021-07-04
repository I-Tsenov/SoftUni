function cardGame(input) {

    const colors = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }

    const powerOfCards = {
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let handTracker = {};

    for (let line of input) {

        let [player, hand] = line.split(": ");
        hand = hand.split(', ');

        if (!handTracker.hasOwnProperty(player)) {
            handTracker[player] = [];
        }

        handTracker[player].push(...hand);
    }

    for (const player in handTracker) {
        let cardsArr = new Set(handTracker[player]);
        let total = 0;

        Array.from(cardsArr).forEach(card => {
            let tokens = card.split('');
            let color = tokens.pop();
            let powerOfCard = tokens.join('')

            if (isNaN(powerOfCard)) {
                powerOfCard = powerOfCards[powerOfCard]
            }

            total += colors[color] * Number(powerOfCard);
        });

        handTracker[player] = total;

        console.log(`${player}: ${total}`);

    }

}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])