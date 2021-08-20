function originalProfile(input) {

    let username = input[0];

    for (let i = 1; i < input.length; i++) {

        let [command, ...params] = input[i].split(' ')

        if (command.includes("Letters")) {
            if (params[0] === 'Lower') {
                username = username.toLowerCase()
                console.log(username);
            }
            if (params[0] === "Upper") {
                username = username.toUpperCase();
                console.log(username);
            }
        }

        if (command === 'Reverse') {
            const startIndex = Number(params[0]);
            const endIndex = Number(params[1]);
            if (startIndex >= 0 && endIndex < username.length) {
                const sliced = username.slice(startIndex, endIndex + 1);
                console.log(sliced.split('').reverse().join(''));
            }
        }

        if (command === 'Substring') {
            const substring = params[0];

            if (username.includes(substring)) {
                let tempSubstr = username.replace(substring, '');
                console.log(tempSubstr);
            } else {
                console.log(`The username ${username} doesn't contain ${substring}.`);

            }
        }

        if (command === 'Replace') {
            const replacedChar = params[0];
            username = username.split(replacedChar).join('-')
            console.log(username)
        }

        if (command === 'IsValid') {
            const char = params[0];

            if (username.includes(char)) {
                console.log("Valid username.");
            } else {
                console.log(`${char} must be contained in your username.`);

            }
        }
    }
}

originalProfile(['John', "Letters Upper", "Substring SA", "IsValid @", "Registration"]);

console.log('------------------------------')

originalProfile([
    'ThisIsSoftUni',
    'Reverse 1 3',
    'Replace S',
    'Substring hi',
    'Registration',
])