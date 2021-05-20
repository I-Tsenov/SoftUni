function suppliesForSchool(input) {

    let penPackets = Number (input[0]);
    let markerPackets = Number (input[1]);
    let detergentLiter = Number (input[2]);
    let discount = Number (input[3]);

    let penPrice = 5.80;
    let markerPrice = 7.20;
    let detergentPrice = 1.20;

    let totalPenPrice = penPackets * penPrice;
    let totalMarkerPrice = markerPackets * markerPrice;
    let totalDetergentPrice = detergentLiter * detergentPrice;


    let total = totalPenPrice + totalMarkerPrice + totalDetergentPrice;
    let totalAfterDiscount = total - ((total * discount) / 100);

    console.log (totalAfterDiscount.toFixed(3));
}


suppliesForSchool(["2", "3", "2.5", "25"]);