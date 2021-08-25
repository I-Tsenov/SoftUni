function cyberSecurity(input) {

    let count = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;

    for (let i = 0; i < count; i++) {
        let isValid = input.shift();
        if (pattern.test(isValid)) {

            let match = pattern.exec(isValid);
            let boss = match.groups.name;
            let title = match.groups.title;

            console.log(`${boss}, The ${title}\n>> Strength: ${boss.length}\n>> Armor: ${title.length}`)
        } else {
            console.log('Access denied!')
        }
    }
}

cyberSecurity(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'])

/* {boss name}, The {title}
>> Strength: {length of the name}
>> Armor: {length of the title}
 */