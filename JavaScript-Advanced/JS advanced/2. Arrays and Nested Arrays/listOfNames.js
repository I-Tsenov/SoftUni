function listOfNames(arr) {

    let result = arr
        .slice(0)
        .sort((a, b) => a.localeCompare(b))
        .map((name, index) => `${index + 1}.${name}`)

        return result.join('\n')
}

    console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));


/*

function listOfNames(arr) {

let orderedList = []
arr.sort((a,b) => a.localeCompare(b))

for (let i = 0; i < arr.length; i++) {
    orderedList.push(`${i + 1}.${arr[i]}`)
}

    return orderedList.join('\n')

}


*/