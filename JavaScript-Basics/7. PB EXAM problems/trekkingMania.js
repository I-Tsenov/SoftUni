function trekkingMania(input) {

    let groups = Number(input[0]);
    let allPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;


    for (let i = 1; i <= groups; i++) {
        let currentGroup = Number(input[i]);

        if (currentGroup <= 5) {
            musala += currentGroup;
        } else if (currentGroup <= 12) {
            monblan += currentGroup;
        } else if (currentGroup <= 25) {
            kilimanjaro += currentGroup;
        } else if (currentGroup <= 40) {
            k2 += currentGroup;
        } else if (currentGroup >= 41) {
            everest += currentGroup;
        }

        allPeople += currentGroup;
    }

    let percentMusala = musala / allPeople * 100;
    let percentMonblan = monblan / allPeople * 100;
    let percentKilimanjaro = kilimanjaro / allPeople * 100;
    let percentK2 = k2 / allPeople * 100;
    let percentEverest = everest / allPeople * 100;

    console.log (`${percentMusala.toFixed(2)}%`)
    console.log (`${percentMonblan.toFixed(2)}%`)
    console.log (`${percentKilimanjaro.toFixed(2)}%`)
    console.log (`${percentK2.toFixed(2)}%`)
    console.log (`${percentEverest.toFixed(2)}%`)

}

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
