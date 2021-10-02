function jsonTable(input) {

    console.log("<table>")

    for (const jsonString of input) {
        let {name, position, salary} = JSON.parse(jsonString)
        
        console.log("   <tr>")
        console.log(`       <td>${name}</td>`)
        console.log(`       <td>${position}</td>`)
        console.log(`       <td>${salary}</td>`)
        console.log("   </tr>")
    }

    console.log("</table>")

}

jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])