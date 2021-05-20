function fruitShop(input) {
    let stock = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (stock) {
                case "banana": price = quantity * 2.5; break;
                case "apple": price = quantity * 1.2; break;
                case "orange": price = quantity * 0.85; break;
                case "grapefruit": price = quantity * 1.45; break;
                case "kiwi": price = quantity * 2.7; break;
                case "pineapple": price = quantity * 5.5; break;
                case "grapes": price = quantity * 3.85; break;
                default: console.log("error"); return;
            } console.log(price.toFixed(2)); break;
        case "Saturday":
        case "Sunday":
            switch (stock) {
                case "banana": price = quantity * 2.7; break;
                case "apple": price = quantity * 1.25; break;
                case "orange": price = quantity * 0.90; break;
                case "grapefruit": price = quantity * 1.6; break;
                case "kiwi": price = quantity * 3; break;
                case "pineapple": price = quantity * 5.6; break;
                case "grapes": price = quantity * 4.2; break;
                default: console.log("error"); return;
            } console.log(price.toFixed(2)); break;
        default: console.log("error"); break;
    }
}

//     switch (day) {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             switch (stock) {
//                 case "banana":
//                     price = quantity * 2.5;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "apple":
//                     price = quantity * 1.2;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "orange":
//                     price = quantity * 0.85;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "grapefruit":
//                     price = quantity * 1.45;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "kiwi":
//                     price = quantity * 2.7;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "pineapple":
//                     price = quantity * 5.5;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "grapes":
//                     price = quantity * 3.85;
//                     console.log(price.toFixed(2));
//                     break;
//                 default: console.log("error"); break;
//             } break;
//         case "Saturday":
//         case "Sunday":
//             switch (stock) {
//                 case "banana":
//                     price = quantity * 2.7;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "apple":
//                     price = quantity * 1.25;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "orange":
//                     price = quantity * 0.90;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "grapefruit":
//                     price = quantity * 1.60;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "kiwi": price =
//                     quantity * 3;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "pineapple":
//                     price = quantity * 5.6;
//                     console.log(price.toFixed(2));
//                     break;
//                 case "grapes":
//                     price = quantity * 4.2;
//                     console.log(price.toFixed(2));
//                     break;
//                 default: console.log("error"); break;
//             } break;
//         default: console.log("error"); break;
//     }
// }

fruitShop(["apple", "Tuesday", "2"]);
fruitShop(["orange", "Sunday", "3"]);
fruitShop(["kiwi", "Monday", "2.5"]);
fruitShop(["grapes", "Saturday", "0.5"]);
fruitShop(["tomato", "Monday", "0.5"]);
