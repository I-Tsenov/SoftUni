function hotelRoom(input) {
    let month = input[0];
    let nightCount = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month === "May" || month === "October") {

        if (nightCount > 7 && nightCount <= 14) {

            studioPrice = (nightCount * 50) - (nightCount * 50) * 0.05;
            apartmentPrice = nightCount * 65;

        } else if (nightCount > 14) {

            studioPrice = (nightCount * 50) - (nightCount * 50) * 0.30;
            apartmentPrice = (nightCount * 65) - (nightCount * 65) * 0.10;

        } else {

            studioPrice = nightCount * 50;
            apartmentPrice = nightCount * 65;

        }

    } else if (month === "June" || month === "September") {

        if (nightCount > 14) {

            studioPrice = (nightCount * 75.2) - (nightCount * 75.2) * 0.20;
            apartmentPrice = (nightCount * 68.70) - (nightCount * 68.7) * 0.10;

        } else {

            studioPrice = nightCount * 75.2;
            apartmentPrice = nightCount * 68.7;

        }
    } else if (month === "July" || month === "August") {

        studioPrice = nightCount * 76;
        apartmentPrice = nightCount * 77;

        if (nightCount > 14) {
            apartmentPrice = (nightCount * 77) - (nightCount * 77) * 0.10;
        }
    }
    
    console.log(`Apartment: ${(apartmentPrice).toFixed(2)} lv.`)
    console.log(`Studio: ${(studioPrice).toFixed(2)} lv.`)

}



hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
