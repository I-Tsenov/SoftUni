function computerStore(arr) {

    const typeCustomer = arr.pop();

    let totalPriceNoTax = arr
    .map(Number)
    .filter(n => n > 0 ? n : console.log('Invalid price!'))
    .reduce((a, b) => a + b, 0);

    let taxes = totalPriceNoTax - totalPriceNoTax * 0.8;
    let totalPrice = totalPriceNoTax + taxes;

    if (typeCustomer === 'special') {
        totalPrice = totalPrice * 0.9;
    }

    if (totalPrice === 0) {
        return 'Invalid order!'
    }

    return `Congratulations you've just bought a new computer!\nPrice without taxes: ${totalPriceNoTax.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`
}

console.log(computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]))

