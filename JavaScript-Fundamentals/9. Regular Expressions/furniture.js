function furniture(input) {

    let totalPrice = 0;
    let output = `Bought furniture:\n`

    for (const text of input) {
        let pattern = />>(?<item>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)!(?<quantity>\d+)/g;
        let match = pattern.exec(text);

        if (match) {
            output += match.groups.item + `\n`
            totalPrice += Number(match.groups.quantity) * Number(match.groups.price);
        }

    }
   output += `Total money spend: ${totalPrice.toFixed(2)}`;
   console.log(output)
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])