function juiceFlavors(input) {

    let juiceBottles = {};
    let flavors = {};

    for (const juice of input) {
        let [flavor, quantity] = juice.split(' => ');
        quantity = Number(quantity);

        if (flavors[flavor] === undefined) {
            flavors[flavor] = quantity;
        } else {
            flavors[flavor] += quantity;
        }

        if (flavors[flavor] / 1000 >= 1) {

            if (juiceBottles[flavor] === undefined) {
                juiceBottles[flavor] = Math.floor(flavors[flavor] / 1000);
            } else {
                juiceBottles[flavor] += Math.floor(flavors[flavor] / 1000);
            }

            flavors[flavor] = quantity % 1000;
        }
    }

    let output = ''

    for (const flavor in juiceBottles) {
        output += `${flavor} => ${juiceBottles[flavor]}\n`
    }

    return output.trim();
}


console.log(juiceFlavors([
    // 'Orange => 2000',
    // 'Peach => 1432',
    'Banana => 450',
    // 'Peach => 600',
    'Banana => 200',
    'Banana => 350',
    'Strawberry => 549']))

console.log('---------------------------')

console.log(juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
))
