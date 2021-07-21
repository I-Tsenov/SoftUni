function travelTime(input) {
   
    let offers = {};
    // parse input

    for (const line of input) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        // handle exceptions

        if (!offers.hasOwnProperty(country)) {
            offers[country] = {};
        }
        if (!offers[country].hasOwnProperty(town)) {
            offers[country][town] = cost;
        } else {
            if (offers[country][town] > cost) {
                offers[country][town] = cost;
            }
        }
    }

    // sort and print
    let sorted = Object.keys(offers)
    sorted.sort();

    for (let country of sorted) {
        let pairs = Object.entries(offers[country]);
        pairs.sort((pair1, pair2) => pair1[1] - pair2[1]);
        pairs.forEach((value, index) => { pairs[index] = value.join(' -> ') } );
        let pricePerTown = pairs.join(' ');
        console.log(`${country} -> ${pricePerTown}`)
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])


                                            // АЛТЕРНАТИВНО РЕШЕНИЕ

// function travelTime(input) {

//     function townExist(offers, town) {
//         for (const offer of offers) {
//             if (offer[0] === town) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     function compareCost(a, b) {
//         let costA = a[1];
//         let costB = b[1];
//         return costA - costB;
//     }

//     let offers = {};
//     // parse input

//     for (const line of input) {
//         let [country, town, cost] = line.split(' > ');
//         cost = Number(cost);
//         let pair = [town, cost];

//         // handle exceptions

//         if (!offers.hasOwnProperty(country)) {
//             offers[country] = [];
//         }
//         if (!townExist(offers[country], town)) {
//             offers[country].push(pair)
//         } else {
//             for (const offer of offers[country]) {
//                 if (offer[0] === town) {
//                     oldCost = offer[1];
//                     if (cost < oldCost) {
//                         offer[1] = cost;
//                         break;
//                     }
//                 }
//             }
//         }
//     }

//     // sort and print
//     let sorted = Object.keys(offers)
//     sorted.sort();

//     for (let country of sorted) {
//         offers[country].sort(compareCost);
//         let pricePerTown = offers[country].join(' ')
//         console.log(`${country} -> ${pricePerTown.replace(/,/g, ' -> ')}`)
//     }
// }