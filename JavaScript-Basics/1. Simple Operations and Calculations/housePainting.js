function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);


    let greenPaint = 3.4;
    let redPaint = 4.3;
    let windowArea = 1.5 * 1.5;
    let doorArea = 1.2 * 2;
    let frontBackWallArea = (x * x) + (x * x) - doorArea;
    let sidewallsArea = 2 * (y * x) - (2 * windowArea);
    let roofSideAndFront = 2 * (x * y) + 2 * (x * h / 2);


    let totalLitersGreenPaint = (frontBackWallArea + sidewallsArea) / greenPaint;
    let totalLitersRedPaint = roofSideAndFront / redPaint;

    console.log(totalLitersGreenPaint.toFixed(2))
    console.log(totalLitersRedPaint.toFixed(2))
}

housePainting([6, 10, 5.2]);
housePainting([10.25, 15.45, 8.88]);