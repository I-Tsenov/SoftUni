function dishwasher(input) {
    let index = 0;
    let bottles = Number(input[index]);
    index++;
    let command = input[index];
    let plates = 0;
    let pots = 0;
    let utensilWashed = 0;
    let detergent = bottles * 750;

    while (command !== "End") {

        let utensils = Number(command);

        if (index % 3 === 0) {
            pots += utensils;
            utensilWashed = utensils * 15;
            detergent -= utensilWashed;

        } else {

            plates += utensils;
            utensilWashed = utensils * 5;
            detergent -= utensilWashed;
        }
        
        if ( detergent < 0 || index === input.length - 1) {
            break;
        } 

        index++;
        command = input[index];

    }

    if (detergent >= 0) {
        console.log("Detergent was enough!");
        console.log(`${plates} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergent)} ml. more necessary!`);
    }

}

// dishwasher(["2", "53", "65", "55", "End"])
dishwasher([1, 10, 15, 10, 12])