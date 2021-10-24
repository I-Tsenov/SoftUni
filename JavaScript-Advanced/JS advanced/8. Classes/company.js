class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(username, salary, position, department) {

        if ([...arguments].every(el => el !== null && el !== undefined && el !== '' && salary >= 0)) {

            let newEmployee = {
                username: username,
                salary: Number(salary),
                position: position
            }

            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [];
            }

            this.departments[department].push(newEmployee);
            return `New employee is hired. Name: ${username}. Position: ${position}`;

        } else {
            throw new Error('Invalid input!')
        }
    }

    bestDepartment() {
        let department = '';
        let biggestAvrgSalary = 0;
        let avrgSalary = 0;

        Object.entries(this.departments).forEach(([key, value]) => {

            let totalSalary = 0;

            value.forEach(empl => {
                totalSalary += empl.salary;
            })

            avrgSalary = totalSalary / value.length;

            if (avrgSalary > biggestAvrgSalary) {
                biggestAvrgSalary = avrgSalary;
                department = key;
            }
        });

        if (department !== '') {
            let output = `Best Department is: ${department}\nAverage salary: ${biggestAvrgSalary.toFixed(2)}\n`;
            Object.values(this.departments[department]).sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
                let empl = `${e.username} ${e.salary} ${e.position}\n`;
                output += empl;
            })
            return output.trim();
        }
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
