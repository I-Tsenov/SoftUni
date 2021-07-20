function piccolo(input) {

    let parkingLot = {};

    for (let str of input) {
        let [command, number] = str.split(', ');

        if (command === 'IN') {
            parkingLot[number] = 1;
        } else {
            delete parkingLot[number];
        }
    }

    let parkingLotSort = Object.keys(parkingLot);

    parkingLotSort.sort()

    if (parkingLotSort.length > 0) {
        console.log(parkingLotSort.join("\n"))
    } else {
        console.log(`Parking Lot is Empty`)
    }

}

// parse input
// create and fill an object
// check the command and act towards it
// print all the car numbers

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

// piccolo (['IN, CA2844AA',
// 'IN, CA1234TA',
// 'OUT, CA2844AA',
// 'OUT, CA1234TA'])