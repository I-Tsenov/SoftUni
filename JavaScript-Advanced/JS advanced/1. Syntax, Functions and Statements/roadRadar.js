function roadRadar(speed, area) {
    // ОПТИМИЗИРАНО РЕШЕНИЕ //
    speed = Number(speed)
    let limit = 0;
    let status = '';

    switch (area) {
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    const speeding = speed - limit

    if (speeding <= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`;
    }

    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    return `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`
}

console.log(roadRadar('130', 'motorway'))

                                        // ПЪРВОНАЧАЛНО РЕШЕНИЕ //

/*

speed = Number(speed);
    let motorwayLimit = 130;
    let interStateLimit = 90;
    let cityLimit = 50;
    let residentialLimit = 20;
    let status = "";
    let difference = 0;

    switch (area) {
        case 'motorway':
            if (speed <= motorwayLimit) {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            } else {
                if (speed - motorwayLimit <= 20) {
                    status = 'speeding';
                } else if (speed - motorwayLimit <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving'
                }
                difference = speed - motorwayLimit;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwayLimit} - ${status}`)
            } break;
        case 'interstate':
            if (speed <= interStateLimit) {
                console.log(`Driving ${speed} km/h in a ${interStateLimit} zone`);
            } else {
                if (speed - interStateLimit <= 20) {
                    status = 'speeding';
                } else if (speed - interStateLimit <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving'
                }
                difference = speed - interStateLimit;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interStateLimit} - ${status}`)
            } break;
        case 'city':
            if (speed <= cityLimit) {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            } else {
                if (speed - cityLimit <= 20) {
                    status = 'speeding';
                } else if (speed - cityLimit <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving'
                }
                difference = speed - cityLimit;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${cityLimit} - ${status}`)
            } break;
        case 'residential':
            if (speed <= residentialLimit) {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            } else {
                if (speed - residentialLimit <= 20) {
                    status = 'speeding';
                } else if (speed - residentialLimit <= 40) {
                    status = 'excessive speeding';
                } else {
                    status = 'reckless driving'
                }
                difference = speed - residentialLimit;
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialLimit} - ${status}`)
            } break;
    }
*/