function factorial(input) {

    let num = Number(input[0]);
    let result = 1;


    for (let i = 1; i <= num; i++) {

        result = result * i;
    }
    console.log(result)

}

factorial(["2"]);