function wordsUppercase(input) {

    let pattern = /\w+/g

    let matchArr = input.match(pattern)
    let output = matchArr
    .map(word => word.toUpperCase())
    .join(', ')
    
    console.log(output)
}

wordsUppercase('Hi, how are you?')