function traveling(input) {

    let index = 0;
    let savings = 0;
    let command = input[index];
    index++

    while (command !== "End") {

        let city = (command)
        let budget = Number(input[index])
        index++


        while (savings < budget) {

            let moneySaved = Number(input[index])
            index++

            savings += moneySaved;
        }
        
        console.log(`Going to ${city}!`)

        savings = 0;

        command = input[index];
        index++
    }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])
