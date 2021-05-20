function radiansToDegrees (input){

    let radian = Number (input[0]);
    let degree = radian * 180 / Math.PI

    console.log (degree.toFixed(0));

}

radiansToDegrees (["3.1416"])