function solve(n) {

    return function (t) {
        return n + t
    }
}

let add5 = solve(5)

console.log(add5(2))
console.log(add5(3))

