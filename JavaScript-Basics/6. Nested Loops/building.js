function building(input) {
    let floors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);


    for (let i = floors; i >= 1; i--) {

        let roomNum = ""    
        // инициализираме  roomNum в родителя, за да минава многократно, ако е само в глобал, ще мине само веднъж и слепва останалите

        for (let k = 0; k < roomsPerFloor; k++) {

            if (i === floors) {
                roomNum += "L" + i + k + " ";
            } else if (i % 2 === 0) {
                roomNum += "O" + i + k + " ";
            } else {
                roomNum += "A" + i + k + " ";
            }
        }
        console.log(roomNum);
    }
}

building(["6", "4"]);    
