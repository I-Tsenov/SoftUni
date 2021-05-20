function primePairs(input) {

    let firstPairStart = Number(input[0]);
    let secondPairStart = Number(input[1]);
    let startToFinishFirstPair = Number(input[2]);
    let startToFinishSecondPair = Number(input[3]);

    let firstPairStop = firstPairStart + startToFinishFirstPair;
    let secondPairStop = secondPairStart + startToFinishSecondPair;
    let stars = "";


    for (let i = firstPairStart; i <= firstPairStop; i++) {

        if (i % 2 === 0) {
            continue;
        }

        for (let j = secondPairStart; j <= secondPairStop; j++) {

            let firstPrime = true;
            let secondPrime = true;

            if (j % 2 === 0) {
                continue;
            }

            for (let div = 2; div < i; div++) {


                if (i % div === 0) {
                    firstPrime = false;
                    break;
                }
            }

            for (let div = 2; div < j; div++) {

                if (j % div === 0) {
                    secondPrime = false;
                    break;
                }
            }

            if (firstPrime === true && secondPrime === true) {
                stars = `${i}${j}`
                console.log(stars);
            }

        }

    }

}

primePairs(["10", "20", "5", "5"]);