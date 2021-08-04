function needForSpeed(input) {
  let actions = {
    Drive(cars, model, distance, fuel) {
      [distance, fuel] = [distance, fuel].map(Number);

      if (cars[model].fuel < fuel) {
        console.log("Not enough fuel to make that ride");
      } else {
        cars[model].fuel -= fuel;
        cars[model].distance += distance;
        console.log(
          `${model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }
      if (cars[model].distance >= 100000) {
        console.log(`Time to sell the ${model}!`);
        delete cars[model];
      }
    },
    Refuel(cars, model, fuel) {
      fuel = Number(fuel);

      let beforeFill = cars[model].fuel;
      let afterFill = cars[model].fuel + fuel;
      let filledAmount = 75 - beforeFill;

      if (afterFill > 75) {
        cars[model].fuel = 75;
        console.log(`${model} refueled with ${filledAmount} liters`);
      } else {
        cars[model].fuel = afterFill;
        console.log(`${model} refueled with ${fuel} liters`);
      }
    },
    Revert(cars, model, kilometers) {
      kilometers = Number(kilometers);
      cars[model].distance -= kilometers;

      if (cars[model].distance < 10000) {
        cars[model].distance = 10000;
      } else {
        console.log(`${model} mileage decreased by ${kilometers} kilometers`);
      }
    },
  };
  let cars = {};
  let carQuantity = input.shift();

  for (let i = 0; i < carQuantity; i++) {
    const car = input.shift();
    let [model, distance, fuel] = car.split("|");
    [distance, fuel] = [distance, fuel].map(Number);
    cars[model] = { distance, fuel };
  }

  while ((line = input.shift()) !== "Stop") {
    let [command, model, ...params] = line.split(" : ");
    actions[command](cars, model, ...params);
  }

  let sortedCars = Object.entries(cars);
  sortedCars.sort((a, b) => {
    let [distanceA, fuelA] = Object.entries(a[1]);
    let [distanceB, fuelB] = Object.entries(b[1]);
    let mileageA = distanceA[1];
    let mileageB = distanceB[1];
    if (mileageA === mileageB) {
      return a[0].localeCompare(b[0]);
    }
    return mileageB - mileageA;
  });

  for (const [model, { distance, fuel }] of sortedCars) {
    console.log(
      `${model} -> Mileage: ${distance} kms, Fuel in the tank: ${fuel} lt.`
    );
  }
}

needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);

// needForSpeed([
//   "3",
//   "Audi A6|38000|62",
//   "Mercedes CLS|11000|35",
//   "Volkswagen Passat CC|45678|5",
//   "Drive : Audi A6 : 543 : 47",
//   "Drive : Mercedes CLS : 94 : 11",
//   "Drive : Volkswagen Passat CC : 69 : 8",
//   "Refuel : Audi A6 : 50",
//   "Revert : Mercedes CLS : 500",
//   "Revert : Audi A6 : 30000",
//   "Stop",
// ]);

// needForSpeed ([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'])
