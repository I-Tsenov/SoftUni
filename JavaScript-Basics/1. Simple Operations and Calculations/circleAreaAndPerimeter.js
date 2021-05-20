function circleAreaAndPerimeter(input) {

    let r = Number(input[0]);
    let diameter = r * r;
    let area = Math.PI * diameter;
    let parameter = 2 * Math.PI * r;

    console.log(area.toFixed(2));
    console.log(parameter.toFixed(2));
}


circleAreaAndPerimeter([3]);
circleAreaAndPerimeter([4.5]);