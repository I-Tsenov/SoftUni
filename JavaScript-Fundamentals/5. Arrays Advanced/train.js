function train(array) {

    let trainArr = array.shift().split(" ").map(Number);
    let capacityWagon = Number(array.shift());
    let addPassengers = [];


    for (let command of array) {

        if (command.includes("Add")) {
            trainArr.push(Number(command.split(" ")[1]))
        } else {

            addPassengers.push(command);

            for (let j = 0; j < trainArr.length; j++) {

                let currentWagon = trainArr[j];

                for (let k = 0; addPassengers.length > 0;) {

                    let passengers = Number(addPassengers[k]);

                    if (currentWagon + passengers <= capacityWagon) {
                        currentWagon += passengers;
                        trainArr[j] = currentWagon;
                        addPassengers.shift()
                    } else {
                        break;
                    }
                }
            }
        }
    }

    let result = trainArr.join(" ")

    return result;
}

console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));
console.log(train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']));



// АЛТЕРНАТИВНО РЕШЕНИЕ //



// function train(array) {

//     let trainArr = array.shift().split(" ").map(Number);
//     let capacityWagon = Number(array.shift());

//     for (let command of array) {

//         if (command.includes("Add")) {

//             trainArr.push(Number(command.split(" ")[1]))

//         } else {

//             let passengers = Number(command);

//             for (let j = 0; j < trainArr.length; j++) {;

//                 if (trainArr[j] + passengers <= capacityWagon) {

//                     trainArr[j] += passengers;
//                     break;
//                 }
//             }
//         }
//     }

//     let result = trainArr.join(" ")

//     return result;
// }


// console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));
// console.log(train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']));