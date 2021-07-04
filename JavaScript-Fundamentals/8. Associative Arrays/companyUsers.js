function companyUsers(input) {
    let companies = {};

    for (const line of input) {
        let [company, id] = line.split(' -> ');

        if (!companies[company]) {
            companies[company] = new Set();
        }

        companies[company].add(id);
    }

    let sorted = Object.keys(companies)
    sorted.sort();

    for (const company of sorted) {
        console.log (company)
        companies[company].forEach(id => {
            console.log(`-- ${id}`)
        });
    }

}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])