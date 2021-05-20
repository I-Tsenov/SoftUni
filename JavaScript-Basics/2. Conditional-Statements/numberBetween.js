function numberBetween(input) {

    let number = Number(input[0]);

    if (number < 100) {
        console.log("Less than 100");
    }
    else if (number <= 200) {                   // тук може да се ползва &&, но понеже не е взето все още ще ползваме наученото
        console.log("Between 100 and 200");

    }
    else {
        console.log("Greater than 200");
    }

}

numberBetween(["95"]);
numberBetween(["120"]);
numberBetween(["210"]);