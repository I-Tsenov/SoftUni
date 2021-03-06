(function christmas() {

    class ChristmasDinner {
        constructor(budget) {
            this.budget = budget;
            this.dishes = [];
            this.products = [];
            this.guests = {};
        }

        get budget() {
            return this._budget;
        }

        set budget(value) {
            if (value < 0) {
                throw new Error("The budget cannot be a negative number");
            }
            this._budget = value;
        }

        shopping([type, price]) {
            if (this.budget > price) {
                this.budget -= price;
                this.products.push(type)
                return `You have successfully bought ${type}!`;
            }
            throw new Error("Not enough money to buy this product");
        }

        recipes({ recipeName, productsList }) {
            productsList.forEach(a => {
                if (this.products.includes(a) === false) {
                    throw new Error("We do not have this product")
                }
            })

            this.dishes.push({ recipeName, productsList })
            return `${recipeName} has been successfully cooked!`;
        }

        inviteGuests(name, dish) {
            let isDishPresent = this.dishes.find(d => d.recipeName === dish)

            if (isDishPresent === undefined) {
                throw new Error("We do not have this dish")
            }

            if (this.guests[name] === undefined) {
                this.guests[name] = dish;
                
                return `You have successfully invited ${name}!`
            } else {
                throw new Error("This guest has already been invited")
            }
        }

        showAttendance() {
            let output = [];

            for (const name in this.guests) {
                let dishRecipes = this.dishes.find(e => {
                    if (e.recipeName === this.guests[name]) {
                        return e
                    }
                })

                output.push(`${name} will eat ${this.guests[name]}, which consists of ${dishRecipes.productsList.join(', ')}`)
            }

            return output.join('\n');
        }
    }


    let dinner = new ChristmasDinner(300);

    console.log(dinner.shopping(['Salt', 1]))
    dinner.shopping(['Beans', 3]);
    dinner.shopping(['Cabbage', 4]);
    dinner.shopping(['Rice', 2]);
    dinner.shopping(['Savory', 1]);
    dinner.shopping(['Peppers', 1]);
    dinner.shopping(['Fruits', 40]);
    dinner.shopping(['Honey', 10]);

    dinner.recipes({
        recipeName: 'Oshav',
        productsList: ['Fruits', 'Honey']
    });

    dinner.recipes({
        recipeName: 'Folded cabbage leaves filled with rice',
        productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
    });
    dinner.recipes({
        recipeName: 'Peppers filled with beans',
        productsList: ['Beans', 'Peppers', 'Salt']
    });


    dinner.inviteGuests('Ivan', 'Oshav');
    console.log(dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice'));
    dinner.inviteGuests('Georgi', 'Peppers filled with beans');

    // console.log(dinner.guests)

    console.log(dinner.showAttendance());

})()

