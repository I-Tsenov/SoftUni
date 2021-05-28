function arrayRotation(arr, num) {

    let modArray = [...arr];   // създаваме копие на оригиналния масив, за да не го разрушим (ES6 синтаксис) | арр.slice() (стар начин);

    for (let rotation = 0; rotation < num; rotation++) {

        let el = modArray.shift()     // изваждаме първия елемент на масива и го записваме в променлива
        modArray.push(el)             // добавяме променливата (първия елемент) в края на масива
    }

    console.log(modArray.join(" "))

}

arrayRotation([51, 47, 32, 61, 21], 2);