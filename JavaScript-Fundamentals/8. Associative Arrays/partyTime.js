function partyTime(input) {

    let vipGuestList = [];
    let regGuestList = [];

    for (let guest of input) {

        if (guest === 'PARTY') {
            let index = input.indexOf(guest)
            peopleComing = input.slice(index + 1)
            break;
        }

        if (guest.charAt(0) < 10 && guest.charAt(0) >= 0) {
            vipGuestList.push(guest);
        } else {
            regGuestList.push(guest);
        }
    }

    peopleComing.forEach(person => {
        if (vipGuestList.includes(person)) {
            let index = vipGuestList.indexOf(person);
            vipGuestList.splice(index, 1)
        } else if (regGuestList.includes(person)) {
            let index = regGuestList.indexOf(person);
            regGuestList.splice(index, 1);
        }
    })

    let notAttending = regGuestList.length + vipGuestList.length
    console.log(notAttending);
    console.log(vipGuestList.join("\n"));
    console.log(regGuestList.join("\n"));
}

partyTime([
    '7NoBUajQ',
    '9NoBUajQ',
    '10oBUajQ',
    'Ce8vwPmE',
    'sVQXQCbc',
    'SVQXQCbc',
    'PARTY',
    'Ce8vwPmE',
])