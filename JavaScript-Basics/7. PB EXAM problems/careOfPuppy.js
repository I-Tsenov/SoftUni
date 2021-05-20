function careOfPuppy(input) {

    let index = 0;
    let foodInGrams = Number(input[index]) * 1000;
    index++
    let command = input[index];

    let totalFood = 0;

    while (command !== "Adopted") {
        let foodPerDay = Number(command);
        index++

        totalFood += foodPerDay;

        command = input[index];
    }

    if (totalFood > foodInGrams) {
        console.log (`Food is not enough. You need ${totalFood-foodInGrams} grams more.`)
    } else {
        console.log (`Food is enough! Leftovers: ${foodInGrams-totalFood} grams.`)
    }

}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);


