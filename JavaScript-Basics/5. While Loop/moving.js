function moving(input) {
    let index = 0;
    let sumBoxes = 0;
    let w = Number(input[index]) 
    index++;
    let l = Number(input[index]) 
    index++;
    let h = Number(input[index])
    index++;
    let command = input[index];
    index++;

    let roomCubicSpace = w * l * h;

    while (command !== "Done") {

        let boxes = Number(command);
        sumBoxes += boxes;

        if (sumBoxes > roomCubicSpace) {
            break;
        }

        command = input[index];
        index++;

    }
    if (command === "Done") {
        console.log(`${roomCubicSpace - sumBoxes} Cubic meters left.`)
    } else {
        console.log(`No more free space! You need ${sumBoxes - roomCubicSpace} Cubic meters more.`);
    }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10","1","2","4","6","Done"]);

