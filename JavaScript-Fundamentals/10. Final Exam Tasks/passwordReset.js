function passwordReset(input) {

    let actions = {
        TakeOdd,
        Cut,
        Substitute
    }

    let password = input.shift();

    while ((line = input.shift()) !== 'Done') {
        let [action, param1, param2] = line.split(' ');
        password = actions[action](param1, param2);
    }

    return `Your password is: ${password}`

    function TakeOdd() {
        let result = ''
        for (let i = 1; i < password.length; i += 2) {
            result += password[i]
        }
        console.log(result);
        return result;
    }
    function Cut(index, length) {
        index = Number(index);
        length = Number(length);
        let substr = password.substring(index, index + length);
        let result = password.replace(substr, '');
        console.log(result);
        return result;
    }
    function Substitute(substr, subst) {
        if (!password.includes(substr)) {
            console.log("Nothing to replace!");
            return password;
        }

        let result = password.split(substr).join(subst);
        console.log(result);
        return result;
    }
}


console.log(passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]))