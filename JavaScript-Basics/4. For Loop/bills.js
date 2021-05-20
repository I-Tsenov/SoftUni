function bills(input) {
    let months = Number(input[0]);

    let waterBill = 20 * months;
    let internetBill = 15 * months;
    let electricityBill = 0;
    let othersBill = 0;

    for (let i = 1; i <= months; i++) {

        let currentElectricityBill = Number(input[i]);
        let waterBillperMonth = 20;
        let internetBillperMonth = 15;
        electricityBill += currentElectricityBill;
        othersBill += (waterBillperMonth + internetBillperMonth + currentElectricityBill) * 1.20;
    }

    let averageBill = (waterBill + internetBill + electricityBill + othersBill) / months;

    console.log(`Electricity: ${electricityBill.toFixed(2)} lv`);
    console.log(`Water: ${waterBill.toFixed(2)} lv`);
    console.log(`Internet: ${internetBill.toFixed(2)} lv`);
    console.log(`Other: ${othersBill.toFixed(2)} lv`);
    console.log(`Average: ${averageBill.toFixed(2)} lv`);

}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
