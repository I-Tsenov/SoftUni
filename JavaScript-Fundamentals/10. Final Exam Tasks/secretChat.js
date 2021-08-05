function secretChat(input) {

    let message = input.shift();

    function InsertSpace(message, index) {
        let firstPart = message.slice(0, index)
        let secondPart = " ";
        let thirdPart = message.slice(index)
        let result = firstPart + secondPart + thirdPart;
        console.log(result);
        return result;
    }
    function Reverse(message, substring) {
        if (message.includes(substring)) {
            let replacement = substring.split("").reverse().join("");
            let result = message
                .replace(substring, replacement)
                .split(replacement).join("") + replacement;
            console.log(result);
            return result;
        } else {
            console.log("error");
            return message;
        }
    }
    function ChangeAll(message, substring, replacement) {
        if (message.includes(substring)) {
            let result = message.split(substring).join(replacement)
            console.log(result);
            return result;
        }
    }

    while ((line = input.shift()) !== "Reveal") {
        let [action, ...params] = line.split(":|:")
        switch (action) {
            case "InsertSpace": message = InsertSpace(message, ...params); break;
            case "Reverse": message = Reverse(message, ...params); break;
            case "ChangeAll": message = ChangeAll(message, ...params); break;
        }
    }

    console.log(`You have a new text message: ${message}`)

}
/*
--parse input
--parse and recieve commands
    -ChangeAll
    -Reverse
    -InsertSpace
    -print result after each command
-- print the revealed message
 
*/

secretChat([
    "heVVodar!gniV",
    "Reverse:|:!gniV",
    "ChangeAll:|:V:|:l",
    "InsertSpace:|:5",
    "Reveal"
])

secretChat(["Hiw?uiyare",
    "ChangeAll:|:i:|:o",
    "Reverse:|:?uoy",
    "Reverse:|:jd",
    "InsertSpace:|:3",
    "InsertSpace:|:7",
    "Reveal"])