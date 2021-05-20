function pipesInPool(input) {

    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let firstPipeLiters = p1 * h
    let secondPipeLiters = p2 * h
    let poolFilled = firstPipeLiters + secondPipeLiters;
    
    let percentPool = poolFilled / v * 100;
    let percentFirstPipe = firstPipeLiters / poolFilled * 100;
    let percentSecondPipe = secondPipeLiters / poolFilled * 100;
    
    if (v >= poolFilled) {
        console.log(`The pool is ${percentPool.toFixed(2)}% full. Pipe 1: ${percentFirstPipe.toFixed(2)}%. Pipe 2: ${percentSecondPipe.toFixed(2)}%.`);
    }
    else {
        console.log(`For ${h} hours the pool overflows with ${(poolFilled - v).toFixed(2)} litters.`)
    }
}

pipesInPool(["1000", "100", "120", "3"]);
pipesInPool(["100", "100", "100", "2.5"]);