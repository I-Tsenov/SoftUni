function fancyBarcodes(input) {

    let count = Number(input.shift());
    let pattern = /@[#]+([A-Z][A-Za-z\d]{4,}[A-Z])@[#]+/

    for (let i = 0; i < count; i++) {
        let barcode = input[i];

        if (barcode.match(pattern)) {
            let matches = barcode.match(pattern);
            let match = matches[0];
            let productGroup = '';

            for (let j = 0; j < match.length; j++) {
                let char = match[j]
                if (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
                    productGroup += char;
                }
            }
            if (productGroup.length === 0) {
                productGroup = '00'
            }
            console.log(`Product group: ${productGroup}`)
        } else {
            console.log('Invalid barcode')
        }
    }
}

// fancyBarcodes(["6",
//     "@###Val1d1teM@###",
//     "@#ValidIteM@#",
//     "##InvaliDiteM##",
//     "@InvalidIteM@",
//     "@#Invalid_IteM@#",
//     "@#ValiditeM@#"])

fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])
