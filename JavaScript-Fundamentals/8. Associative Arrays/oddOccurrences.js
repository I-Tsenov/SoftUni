function oddOccurrences(input) {

    // make elements equaly sized - tolowercase
    // parse input to iteratable form - array

    input = input.toLowerCase().split(' ')
    let oddBook = {};
    let line = [];
    // iterate

    for (let element of input) {

        // count the times every element appears

        if (oddBook.hasOwnProperty(element)) {
            oddBook[element] += 1;
            continue;
        }
        oddBook[element] = 1;

    };

    let oddBookArray = Object.entries(oddBook)


    oddBookArray.filter(element => {
        if (element[1] % 2 !== 0) {
            return line.push(element[0]);
        }
    })

    // print all odd appearances
    console.log(line.join(" "))

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')