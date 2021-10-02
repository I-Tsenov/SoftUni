function lowestPricesInCities(sales) {
    let products = new Map();
    for (let sentance of sales) {
        let [town, product, price] = sentance.split(" | ");
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }
    for (let [key, value] of products) {
        let [town, price] = [...value].reduce((a, b) => a[1] > b[1] ? b : a)
        console.log(`${key} -> ${price} (${town})`);
    }
}

// console.log(lowestPricesInCities([
//     'Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
//   ]));

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
])


/*
function lowestPricesInCities(sales) {
  // 75/100
  let log = {};
  while (sales.length) {
      let sale = sales.shift();
      let [town, product, price] = sale.split(' | ');
      price = Number(price);

      if (!log[product]) {
          log[product] = { town, price };
      } else {
          log[product] = log[product].price <= price ? log[product] : { town, price };
      }
  }

  let result = [];
  for (const product in log) {
      result.push(`${product} -> ${log[product].price} (${log[product].town})`);
  }

  return result.join('\n')
}
*/