function agencyProfit (input) {

    let avioCompany = input[0];
    let adultTicketQuantity = Number (input[1]);
    let kidTicketQuantity = Number (input[2]);
    let adultTicketPrice = Number (input[3]);
    let taxCare = Number (input[4]);

    let totalAdultPrice = adultTicketPrice + taxCare
    let totalKidPrice = (adultTicketPrice - adultTicketPrice * 0.70) + taxCare
    let totalTicketIncome = (totalAdultPrice * adultTicketQuantity) + (totalKidPrice * kidTicketQuantity);

    let total = totalTicketIncome * 0.20;
    console.log(`The profit of your agency from ${avioCompany} tickets is ${total.toFixed(2)} lv.`)
  
}

agencyProfit (["WizzAir","15","5","120","40"]);