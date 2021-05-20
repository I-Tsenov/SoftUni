function yardGreening(greenMeters) {


    let pricePerMeter = greenMeters * 7.61;
    let discount = pricePerMeter * 0.18;
    let totalPrice = pricePerMeter - discount;

    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening("550")