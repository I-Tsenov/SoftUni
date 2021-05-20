function roomPainting(input) {

    let paintBuckets = Number(input[0]);
    let wallSheet = Number(input[1]);
    let glovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let paintPrice = 21.50;
    let wallSheetPrice = 5.20;
    let gloves = Math.ceil(wallSheet * 0.35);
    let brushes = Math.floor(paintBuckets * 0.48);

    let totalPaintPrice = paintBuckets * paintPrice;
    let totalWallSheetPrice = wallSheet * wallSheetPrice;
    let totalGlovesPrice = gloves * glovesPrice;
    let totalBrushesPrice = brushes * brushPrice;

    let delivery = (totalBrushesPrice + totalGlovesPrice + totalPaintPrice + totalWallSheetPrice) / 15;

    console.log(`This delivery will cost ${delivery.toFixed(2)} lv.`)

}


roomPainting(["10", "8", "2.2", "5"]);
// roomPainting (["21","18","5","2.2"]);