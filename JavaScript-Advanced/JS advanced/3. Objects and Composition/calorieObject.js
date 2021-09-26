function calorieObject (arr) {

    let productList = {};

    for (let i = 0; i < arr.length; i+=2) {

            productList[arr[i]] = Number(arr[i + 1])
        
    }

    return productList

}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))