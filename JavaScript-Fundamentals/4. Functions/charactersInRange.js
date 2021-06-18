function charactersInRange(char1, char2) {

    let inRange = ""

    if (char1.charCodeAt() > char2.charCodeAt()) {
        for (var i = char2.charCodeAt() + 1; i < char1.charCodeAt(); i++) {
            inRange += String.fromCharCode(i) + " ";
        }
    } else {
        for (var i = char1.charCodeAt() + 1; i < char2.charCodeAt(); i++) {
            inRange += String.fromCharCode(i) + " ";
        }
    }

    return inRange;
}

console.log(charactersInRange("a", "d"));
console.log(charactersInRange("#", ":"));
console.log(charactersInRange("C", "#"));