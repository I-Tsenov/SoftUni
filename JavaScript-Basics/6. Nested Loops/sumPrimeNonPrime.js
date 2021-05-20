function sumPrimeNonPrime(input) {

    let i = 0;
    let primeSum = 0;
    let nonPrimeSum = 0;

    let command = input[i];
    i++

    while (command !== "stop") {

        let isPrime = true;

        let currentNum = Number(command);

        if (currentNum < 0) {

            console.log("Number is negative.")

        } else {

            for (let div = 2; div < currentNum; div++) {

              
                if (currentNum % div === 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                primeSum += currentNum;
            } else {
                nonPrimeSum += currentNum;
            }

        }

        command = input[i];
        i++
    }


    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])
sumPrimeNonPrime(["0","-9","0","stop"])




//                                 РЕШЕНИЕ НА АНТОАНЕТА ЙОРДАНОВА


// function primeOrNotPrime(input){
//     let index = 0;
//     let isStop = input[index];
//     let num = Number(input[index]);
//     let primeSum = 0;
//     let nonPrimeSum = 0;
 
//     while(isStop !== 'stop'){
 
//         let isPrime = true;
//         if(num < 0){
//             console.log('Number is negative.');
//         }
 
//         else{
//             for(let j = 2; j < num; j++){
//                 if(num % j === 0){
//                     isPrime = false;
//                 } 
//             }
//             if(isPrime){
//                 primeSum += num;
//             } else{
//                 nonPrimeSum += num;
//             }
//         }
 
//         index++;
//         isStop = input[index];
//         num = Number(input[index]);
//     }
 
//     console.log(`Sum of all prime numbers is: ${primeSum}`);
//     console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)