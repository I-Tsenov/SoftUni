function storeProvision(productsInStore, orderedProducts) {

    let inventory = {};

    for (let i = 0; i < productsInStore.length; i += 2) {

        const product = productsInStore[i];
        const quantity = Number(productsInStore[i + 1]);

        inventory[product] = quantity;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {

        const product = orderedProducts[i];
        const quantity = Number(orderedProducts[i + 1]);

        if (inventory.hasOwnProperty(product)) {
            inventory[product] += quantity;
        } else {
            inventory[product] = quantity;
        }
    }

    Object.keys(inventory).forEach( key => {
        console.log(`${key} -> ${inventory[key]}`)
    })
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])



// function storeProvision(stockArr, orderArr) {
//     let shop = {};
//     let coppy = stockArr.slice(0);
//     // let coppy2 = stockArr.slice(0)  //????


//     for (i = 0; i < orderArr.length; i += 2) {    //orderArr   length
//         if (coppy.includes(orderArr[i])) {
//             let index = stockArr.indexOf(orderArr[i])
//             let stockNumbers = Number(stockArr[index + 1]);
//             let orderNumbers = Number(orderArr[i + 1])
//             let newNumbers = stockNumbers + orderNumbers;

//             coppy[index + 1] = newNumbers
//         }
//         else {
//             coppy.push(orderArr[i], orderArr[i + 1]);
//         }
//     }

//     for (let j = 0; j < coppy.length; j += 2) {
//         shop[coppy[j]] = coppy[j + 1];
//     }

//     // let keysProducts = Object.keys(shop)    //object.keys метода връща масив - прави се когато искаме да сортираме обикновено

//     for (const key in shop) {
//         console.log(`${key} -> ${shop[key]}`);
//     }
// }

// storeProvision([
//     'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
// ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ])