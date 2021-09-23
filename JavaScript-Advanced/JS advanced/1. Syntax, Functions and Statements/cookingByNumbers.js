function cookingByNumbers(num, ...actions) {
    num = Number(num);

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        switch (action) {
            case 'chop': num /= 2; break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num *= 0.80; break;
        }
        console.log(num)
    }
}


// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')