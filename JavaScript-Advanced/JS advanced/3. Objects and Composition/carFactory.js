function carFactory(input) {

    function getEngine(power) {
        const engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ].sort((a, b) => a.power - b.power)

        return engines.find(el => el.power >= power)
    }

    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color: color
        }
    }
    function getWheels(wheelsize) {
        let wheel = wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize
        return Array(4).fill(wheel, 0, 4);
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)
    }
}

console.log(carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}
))

// ПЪРВОНАЧАЛНО РЕШЕНИЕ 

/*
function carFactory(car) {

    let engine = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 }
    }
    let carriage = {
        hatchback: { type: 'hatchback', color: "" },
        coupe: { type: 'coupe', color: "" }
    }
    let wheels = [];

    if (car.power <= 90) {
        car.engine = engine.small;
    } else if (car.power > 90 && car.power <= 120) {
        car.engine = engine.normal;
    } else if (car.power > 120) {
        car.engine = engine.monster;
    }

    delete car.power;

    switch (car.carriage) {
        case 'hatchback':
            car.carriage = carriage.hatchback;
            car.carriage.color = car.color;
            delete car.color;
            break;
        case 'coupe':
            car.carriage = carriage.coupe;
            car.carriage.color = car.color;
            delete car.color;
            break;
    }

    if (car.wheelsize % 2 === 0) {
        car.wheelsize -= 1;
    }

    for (let i = 0; i < 4; i++) {
        wheels.push(car.wheelsize);
    }
    car.wheels = wheels
    delete car.wheelsize;

    return car;
}
*/