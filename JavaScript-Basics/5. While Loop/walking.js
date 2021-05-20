function walking(input) {

    let goal = 10000;
    let index = 0;
    let sumOfSteps = 0;
    let command = input[index];
    index++

    while (sumOfSteps < goal) {

        if (command === "Going home") {
            sumOfSteps += Number(input[index])
            break;
        }

        let steps = Number(command);

        sumOfSteps += steps;

        command = input[index];
        index++
    }
    if (sumOfSteps >= goal) {
        console.log("Goal reached! Good job!");
        console.log(`${sumOfSteps - goal} steps over the goal!`);
    } else {
        console.log(`${goal - sumOfSteps} more steps to reach goal.`);
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);

// АЛТЕРНАТИВНО РЕШЕНИЕ НА HRISTO POPOV / ХРИСТО ПОПОВ

     
// function walking(input) {
 
//     let stepsLevel = 10000;
//     let stepsCounter = 0;
//     let index = 0;
 
//     while (stepsCounter <= stepsLevel) {
//         let tempCommand = input[index];
//         index++;
//         if (tempCommand != "Going home") {
//             stepsCounter += Number(tempCommand);
 
//         } else {
//             stepsCounter += Number(input[index]);
//             break;
//         }
//     }
 
//     let result = stepsCounter - stepsLevel;
//     if (result >= 0) {
//         console.log(`Goal reached! Good job!`);
//         console.log(`${result} steps over the goal!`);
//     } else {
//         console.log(`${Math.abs( result)} more steps to reach goal.`);
//     }
// }
