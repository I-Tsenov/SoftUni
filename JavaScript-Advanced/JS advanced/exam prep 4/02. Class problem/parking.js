(function parking() {

    class Parking {
        constructor(capacity) {
            this.capacity = capacity;
            this.vehicles = [];
        }

        addCar(carModel, carNumber) {
            if (this.vehicles.length >= this.capacity) {
                throw new Error("Not enough parking space.")
            }

            this.vehicles.push({ carModel: carModel, carNumber: carNumber, payed: false })
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }

        _hasParked(carNumber) {
            const hasParked = this.vehicles.findIndex(car => car.carNumber === carNumber);
            if (hasParked === -1) {
                return hasParked;
            }
            return hasParked
        }
        _hasPayed(carNumber) {
            const checkPayment = this.vehicles.findIndex(car => car.carNumber === carNumber && car.payed === true)

            if (checkPayment !== -1) {
                return checkPayment;
            }
            return checkPayment;
        }

        removeCar(carNumber) {

            if (this._hasParked(carNumber) === -1) {
                throw new Error(`The car, you're looking for, is not found.`);
            }

            if (this._hasPayed(carNumber) === -1) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
            } else {
                let index = this._hasPayed(carNumber)
                this.vehicles.splice(index, 1)
                return `${carNumber} left the parking lot.`
            }
        }

        pay(carNumber) {
            if (this._hasParked(carNumber) === -1) {
                throw new Error(`${carNumber} is not in the parking lot.`);
            }
            if (this._hasPayed(carNumber) === -1) {
                let index = this._hasParked(carNumber);
                this.vehicles[index].payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`;
            } else {
                throw new Error(`"${carNumber}'s driver has already payed his ticket.`)
            }
        }

        getStatistics(carNumber) {
            let hasPaid = 'Not payed'

            if (arguments.length === 0) {

                let output = `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`

                this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));

                for (const { carNumber, carModel, payed } of this.vehicles) {
                    if (payed === true) {
                        hasPaid = 'Has payed'
                    }

                    output += `\n${carModel} == ${carNumber} - ${hasPaid}`
                }
                return output;
            }

            let targetCar = this.vehicles.find(car => car.carNumber === carNumber);
            let { carModel, payed } = targetCar

            if (payed === true) {
                hasPaid = 'Has payed'
            }

            return `${carModel} == ${carNumber} - ${hasPaid}`
        }
    }

    const parking = new Parking(12);

    console.log(parking.addCar("Volvo t600", "TX3691CA"));
    console.log(parking.getStatistics());
    console.log(parking.pay("TX3691CA"));
    console.log(parking.removeCar("TX3691CA"));
})()