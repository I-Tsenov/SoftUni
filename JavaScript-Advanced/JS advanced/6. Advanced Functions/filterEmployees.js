function filterEmployees(data, criteria) {

    let employees = JSON.parse(data);
    let output = '';
    let counter = 0;

    for (const employee of employees) {

        let [criteriaProp, criteriaVal] = criteria.split('-');
        
        if (criteria !== 'All') {
            if (employee[criteriaProp] === criteriaVal) {
                output += `${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}\n`;
                counter++
            }
        } else {
            output += `${counter}. ${employee.first_name} ${employee.last_name} - ${employee.email}\n`;
            counter++
        }
    }

    return output.trim();
}


console.log(filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
}, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
},  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`,
'gender-Female'
))

// console.log(filterEmployees(`[{
//     "id": "1",
//     "first_name": "Kaylee",
//     "last_name": "Johnson",
//     "email": "k0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Johnson",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   }, {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }, {
//     "id": "4",
//     "first_name": "Evanne",
//     "last_name": "Johnson",
//     "email": "ev2@hostgator.com",
//     "gender": "Male"
//   }]`,
//     'All'

// ))