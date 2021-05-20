function charityCampaign (input) {

    let campaignDays = Number(input[0]);
    let sugarDaddies = Number(input[1]);
    let cakeCount = Number(input[2]);
    let waffleCount = Number(input[3]);
    let pancakeCount = Number(input[4]);

    let totalSumForCake = cakeCount * 45;
    let totalSumForWaffle = waffleCount * 5.80;
    let totalSumForPancakes = pancakeCount * 3.20;

    let totalSumforAllProducts = (totalSumForCake + totalSumForWaffle + totalSumForPancakes) * sugarDaddies;
    let totalSumforAllDays = totalSumforAllProducts * campaignDays;
    let moneyRaised = totalSumforAllDays - totalSumforAllDays / 8;
    

    console.log(moneyRaised);


}

charityCampaign(["23", "8", "14", "30", "16"]);