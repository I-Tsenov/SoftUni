function softuniBarIncome(input) {

    let income = 0;
    for (const line of input) {
        const pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$\%\.]+)?<(?<product>\w+)>([^\|\$\%\.]+)?\|(?<count>\d+)\|([^\|\$\%\.0-9]+)?(?<price>\d+(\.\d+)?)\$/g
        let match = pattern.exec(line);

        if (match) {
            let totalPrice = Number(match.groups.count) * Number(match.groups.price);
            income += totalPrice
            console.log(`${match.groups.name}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${income.toFixed(2)}`);
}

softuniBarIncome([
    '%George%<Croissant>|2|10$',
    '%Valid%valid23da<Val435_id>valid24dad|10|valid20$',
    '%Name%<Product2>|2|20.50$',
    '%Peter%<Gum>|2|1.3$',
    '%Maria%<Cola>|2|2.4$',
    'end of shift'])



                                       //  НЕРАБОТЕЩО РЕШЕНИЕ  70/100  //

// function softuniBarIncome(input) {

//     let incomeBook = {};
//     let totalIncome = 0;
//     let pattern = /%([A-Z][a-z]+)%([^\|\$\%\.]+)?<(\w+)>([^\|\$\%\.]+)?\|(\d+)\|([^\|\$\%\.]+)?(\d+(\.\d+)?)\$/g

//     for (let line of input) {

//         if (line === 'end of shift') {
//             break;
//         }

//         if (!line.match(pattern)) {
//             continue;
//         }

//         let totalPrice = 0

//         let nameRegx = /%(?<name>[A-Z][a-z]+)%/g
//         let productRegx = /<(?<product>\w+)>/g
//         let countRegx = /\|(?<count>\d+)\|/g
//         let priceRegx = /(?<price>\d+(\.\d+)?)\$/g

//         let matchName = nameRegx.exec(line)
//         let matchProduct = productRegx.exec(line)
//         let matchCount = countRegx.exec(line)
//         let matchPrice = priceRegx.exec(line)

//         totalPrice = Number(matchCount[1]) * Number(matchPrice[1]);

//         if (!incomeBook.hasOwnProperty(matchName[1])) {
//             incomeBook[matchName[1]] = [matchProduct[1], totalPrice]
//         } else {
//             incomeBook[matchName[1]][1] += totalPrice
//         }

//         totalIncome += totalPrice;
//     }
//     for (let name in incomeBook) {
//         let [product, price] = incomeBook[name]
//         console.log(`${name}: ${product} - ${price.toFixed(2)}`)
//     }
//     if (totalIncome > 0) {
//         console.log(`Total income: ${totalIncome.toFixed(2)}`)
//     }
// }

// softuniBarIncome([
//     '%George%<Croissant>|2|10$',
//     '%George%<Croissant>|2|10$',
//     '%George%<Croissantt>|2|10$',
//     '%George%<Croissant>|2|10$',
//     '%Valid%valid23da<Val435_id>valid24dad|10|valid20$',
//     '%Name%<Product2>|2|20.50$',
//     '%Peter%<Gum>|2|1.3$',
//     '%Maria%<Cola>|2|2.4$',
//     'end of shift'])
