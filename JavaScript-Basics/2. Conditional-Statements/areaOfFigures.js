function areaOfFigures(input) {

   let figure = input[0];
   let area = 0;

   if (figure === "square") {
      let number = Number(input[1]);
      area = number * number;
   }
   else if (figure === "rectangle") {
      let number1 = Number(input[1]);
      let number2 = Number(input[2]);
      area = number1 * number2;
   }
   else if (figure === "circle") {
      let number = Number(input[1]);
      area = Math.PI * Math.pow(number, 2);    // area в случаят е радиус, ползваме areа, за да не повтаряме код
   }
   else if (figure === "triangle") {
      let number1 = Number(input[1]);
      let number2 = Number(input[2]);
      area = number1 * number2 / 2;
   }
   console.log(area.toFixed(3))
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);


