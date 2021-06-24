class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type.toString();
        this.model = model.toString();
        this.parts = parts;
        parts.quality = this.parts["engine"] * this.parts["power"];
        this.fuel = Number(fuel);
    }

    drive(l) {
       this.fuel -= l;
       return this.fuel;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);

console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

