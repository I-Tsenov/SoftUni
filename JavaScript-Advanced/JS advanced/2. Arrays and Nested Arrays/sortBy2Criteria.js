function sortBy2Criteria(arr) {

    arr.sort(sortLengthFirst)

    function sortLengthFirst(a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        } else {
          return a.localeCompare(b)
        }
    }

    return arr.join("\n")
}

console.log(sortBy2Criteria(['test', 
'Deny', 
'omen', 
'Default']
))