function employees(arr) {

    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        let personalNumber = arr[i].length;
        let currentEmployee = new Employee(name, personalNumber)

        console.log(`Name: ${currentEmployee.name} -- Personal Number: ${currentEmployee.personalNumber}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
