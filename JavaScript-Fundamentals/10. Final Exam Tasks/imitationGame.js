function imitationGame(input) {

    let actions = {
        Move,
        Insert,
        ChangeAll
    }

    let message = input.shift();

    while ((command = input.shift()) !== 'Decode') {
        let [action, ...params] = command.split('|');
        actions[action](...params)
    }

    console.log(`The decrypted message is: ${message}`)

    function Move(numLetters) {
        numLetters = Number(numLetters);
        let firstPart = message.substring(0, numLetters);
        let secondPart = message.substring(numLetters);
        message = secondPart + firstPart;
    }
    function Insert(index, value) {
        index = Number(index);
        let firstPart = message.substring(0, index);
        let secondPart = message.substring(index);
        message = firstPart + value + secondPart
    }
    function ChangeAll(substr, replacement) {
        message = message.split(substr).join(replacement)
    }
}


imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
])

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]
)