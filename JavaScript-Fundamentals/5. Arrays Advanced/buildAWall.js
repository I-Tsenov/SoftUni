function buildAWall(arr) {

    let wall = arr.map(Number);
    let concretePerDay = "";
    let concreteTotal = 0;
    let finalCost = 0;

    while (true) {
        for (let i = 0; i < wall.length; i++) {

            if (wall[i] === 30) {
                let indexOfSection = wall.indexOf(wall[i]);
                wall.splice(indexOfSection, 1)
                i = i - 1;
                continue;
            }

            wall[i] += 1;
            concreteTotal += 195;
        }

        if (wall.length === 0) {
            break;
        }

        concretePerDay += wall.length * 195 + ", ";
    }

    concretePerDay = concretePerDay.replace(/,\s*$/,"");   //removes last coma
    finalCost = `${concreteTotal * 1900} pesos`

    return concretePerDay + "\n" + finalCost;
}

console.log(buildAWall([17, 22, 17, 19, 17]));


/*

Each section has its own construction crew that can add 1 foot of height per day
by using 195 cubic yards of concrete

1 foot per day
One cubic yard of concrete costs 1900 pesos.

*/