function minNumber(input) {

    let index = 0;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let command = input[index]
    index++

    while (command !== "Stop") {
        let currentNum = Number(command);

        if (currentNum < minNumber) {
            minNumber = currentNum;
        }
        command = input[index];
        index++
    }
    console.log(minNumber);
}

minNumber(["45", "-20", "7", "99", "Stop"]);
