class Employee extends Person {

    constructor(name, gender, salary, language) {
        super(name, gender);
        this.salary = salary;
        this.language = language;
    }

    toString() {
        return `${super.toString()}, Salary: ${this.salary}`;
    }
}