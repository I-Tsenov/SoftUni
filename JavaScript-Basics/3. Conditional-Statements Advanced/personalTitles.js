function personalTitles(input) {
    let age = Number(input[0]);
    let sex = input[1];

    if (age >= 16) {
        switch (sex){
            case "m": console.log("Mr."); break;
            case "f": console.log("Ms."); break;
        }
    }
    else {
        switch (sex) {
            case "m": console.log("Master"); break;
            case "f": console.log("Miss"); break;
        }
    }

}



personalTitles(["12", "f"]);
personalTitles(["17", "m"]);
personalTitles(["25", "f"]);
personalTitles(["13.5", "m"]);
