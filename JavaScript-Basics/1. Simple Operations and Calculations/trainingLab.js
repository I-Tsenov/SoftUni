function trainingLab(input) {

    let hallway = 100;
    let roomLenghtInCm = Number(input[0] * 100);
    let roomWidthInCm = Number(input[1] * 100) - hallway;

    let workSpacePerRow = Math.floor(roomLenghtInCm / 120);
    let workSpacePerColumn = Math.floor(roomWidthInCm / 70);

    let totalSeats = (workSpacePerRow * workSpacePerColumn) - 3;


    console.log(totalSeats);

}

trainingLab([15, 8.9]);
trainingLab([8.4, 5.2]);