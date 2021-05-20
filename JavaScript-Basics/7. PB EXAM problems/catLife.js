function catLife(input) {
    let breed = input[0];
    let gender = input[1];

    let isFalseBreed = false
    let ageInHumanYears = 0;

    switch (breed) {

        case "British Shorthair":
            if (gender === "m") {
                ageInHumanYears = 13 * 12;
            } else if (gender === "f") {
                ageInHumanYears = 14 * 12;
            } break;
        case "Siamese":
            if (gender === "m") {
                ageInHumanYears = 15 * 12;
            } else if (gender === "f") {
                ageInHumanYears = 16 * 12;
            } break;
        case "Persian":
            if (gender === "m") {
                ageInHumanYears = 14 * 12;
            } else if (gender === "f") {
                ageInHumanYears = 15 * 12;
            } break;
        case "Ragdoll":
            if (gender === "m") {
                ageInHumanYears = 16 * 12;
            } else if (gender === "f") {
                ageInHumanYears = 17 * 12;
            } break;
        case "American Shorthair":
            if (gender === "m") {
                ageInHumanYears = 12 * 12;
            } else if (gender === "f") {
                ageInHumanYears = 13 * 12;
            } break;
        case "Siberian":
            if (gender === "m") {
                ageInHumanYears = 11 * 12;
            } else if (gender === "f") {
                ageInHumanYears = 12 * 12;
            } break;
        default:
            isFalseBreed = true;
            console.log(`${breed} is invalid cat!`); break;
    }

    catAge = Math.floor(ageInHumanYears / 6)

    if (!isFalseBreed) {
        console.log(`${catAge} cat months`);
    }
}

catLife(["Persian", "m"]);
