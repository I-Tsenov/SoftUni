function birthdayParty(input) {

    let rent = Number(input[0]);
    let cakePrice = rent * 0.2;
    let drinks = cakePrice - (cakePrice * 0.45);
    // защо не е просто cakePrice * 0.45
    let animatorPrice = rent / 3;

    let totalPrice = rent + cakePrice + drinks + animatorPrice;

    console.log(totalPrice);

}

birthdayParty(["2250"])