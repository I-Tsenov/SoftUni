function exchange(input) {

    let text = input.shift();
    let actions = {
        Translate,
        Includes,
        Start,
        Lowercase,
        FindIndex,
        Remove
    }

    while ((command = input.shift()) !== 'End') {
        let [action, ...params] = command.split(' ');
        actions[action](...params);
    }

    function Translate(char, replacement) {
        text = text.split(char).join(replacement);
        console.log(text);
    }

    function Includes(string) {
        if (text.includes(string)) {
            console.log('True')
        } else {
            console.log('False')
        }
    }

    function Start(string) {
        let startOfString = text.slice(0, string.length);
        if (startOfString === string) {
            console.log('True');
        } else {
            console.log('False')
        }
    }

    function Lowercase() {
        text = text.toLocaleLowerCase();
        console.log(text);
    }

    function FindIndex(char) {
        console.log(text.lastIndexOf(char))
    }

    function Remove(startIndex, count) {
        startIndex = Number(startIndex);
        count = Number(count);
        let firstPart = text.substring(0, startIndex);
        let secondPart = text.substring(startIndex + count)
        text = firstPart + secondPart;
        console.log(text)
    }
}

exchange(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])
