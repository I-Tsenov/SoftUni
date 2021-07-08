function softUniReception(arr) {

    let students = Number(arr.pop());
    let totalEffiency = arr.map(Number).reduce((a, b) => a + b, 0);
    let hourCounter = 0;

    while (students > 0) {
        hourCounter++;
        if (hourCounter % 4 === 0) {
            continue;
        }
        students -= totalEffiency;
    }
    console.log(`Time needed: ${hourCounter}h.`)
}

softUniReception(['5', '6', '4', '20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);
