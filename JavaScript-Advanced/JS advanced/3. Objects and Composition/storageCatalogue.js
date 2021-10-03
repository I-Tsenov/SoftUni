function storageCatalogue(input) {

    let dictionary = {};
    let result = '';

    for (const order of input) {
        let [product, price] = order.split(' : ');
        price = Number(price);
        const firstLetter = product.charAt(0);

        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = {};
        }

        dictionary[firstLetter][product] = price;
    }

    let sortedDictLetters = Object.keys(dictionary).sort((a,b) => a.localeCompare(b));

    for (const dictLetter of sortedDictLetters) {
        result += `${dictLetter}\n`
        let sortedProductNames = Object.keys(dictionary[dictLetter]).sort((a,b) => a.localeCompare(b));
        
        for (const productName of sortedProductNames) {
            result+= `  ${productName}: ${dictionary[dictLetter][productName]}\n`
        }
    }

    return result;
}

console.log(storageCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
))

/*
function storageCatalogue(input) {

    let dictionary = {};

    for (const order of input) {
        let [product, price] = order.split(' : ');
        price = Number(price);
        const firstLetter = product.charAt(0);

        if (!dictionary[firstLetter]) {
            dictionary[firstLetter] = [];
        }

        dictionary[firstLetter].push({ product, price });
        dictionary[firstLetter].sort((a, b) => (a.product).localeCompare(b.product));
    }

    let result = [];

    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1]
        .sort((a,b)=> (a.product).localeCompare(b.product))  // {name, price}
        .map(nameOfProduct => `  ${nameOfProduct.product}: ${nameOfProduct.price}`) // name: price
        .join('\n');

        let string = `${entry[0]}\n${values}`;
        result.push(string);
    });

    return result.join('\n')
}

*/