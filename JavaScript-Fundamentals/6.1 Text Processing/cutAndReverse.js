function cutAndReverse(text) {

    let firstHalf = '';
    let secondHalf = '';

    let middle = text.length / 2;
    firstHalf = text.substring(0, middle);
    secondHalf = text.substring(middle);

    // for (let i = 0; i < text.length; i++) {

    //     if (i < text.length / 2) {
    //         firstHalf += text[i];
    //     } else {
    //         secondHalf += text[i]
    //     }
    // }

    console.log(firstHalf.split('').reverse().join(''));
    console.log(secondHalf.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')