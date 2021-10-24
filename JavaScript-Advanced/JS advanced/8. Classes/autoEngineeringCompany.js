function autoEngineeringCompany(input) {
    let cars = {};

    for (let data of input) {
        let [brand, model, quantity] = data.split(" | ");
        quantity = Number(quantity);

        if (cars[brand] === undefined) {
            cars[brand] = [];
            cars[brand].push({ model, quantity });
        } else if (cars[brand].some(car => car.model === model)) {
            let targetCar = cars[brand].find(car => car.model === model);
            targetCar.quantity += quantity;
        } else {
            cars[brand].push({ model, quantity });
        }
    }

    for (const [brand, car] of Object.entries(cars)) {
        console.log(brand);
        for (const currentCar of Object.values(car)) {
            console.log(`###${currentCar.model} -> ${currentCar.quantity}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])
