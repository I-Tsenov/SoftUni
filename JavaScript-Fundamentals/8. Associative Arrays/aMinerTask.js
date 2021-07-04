function minerTask(input) {
    
    let mine = {};

    for (let i = 0; i < input.length; i+=2) {
        let resource = input[i];
        let quantity = Number(input[i+1]);
   
        if (mine[resource]) {
            mine[resource] += quantity;
        } else {
            mine[resource] = quantity;
        }
    }

    mine = Object.entries(mine);

    for (const [resource, quantity] of mine) {
        console.log(`${resource} -> ${quantity}`)
    }

}

minerTask ([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15'
])