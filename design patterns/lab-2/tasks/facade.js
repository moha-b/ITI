class School {
    constructor() {
        this.Validator = new Validator();
    }

    canAcceptStudent(student) {
        if (
            this.Validator.isAgeValid(student.age) &&
            this.Validator.hasValidBankStatement(student.parent.bankStatement)
        ) {
            console.log(`${student.name} is accepted into the school.`);
            return true;
        } else {
            console.log(`${student.name} cannot be accepted into the school.`);
            return false;
        }
    }
}

class Validator {
    isAgeValid(age) {
        return age >= 8;
    }
    hasValidBankStatement(bankStatement) {
        return bankStatement === true;
    }
}


const school = new School();

const student1 = {
    name: "ahmed mohsen",
    age: 8,
    parent: {
        bankStatement: true
    }
};

const student2 = {
    name: "ahmed me4 mohsen",
    age: 8,
    parent: {
        bankStatement: false
    }
};

school.canAcceptStudent(student1);
school.canAcceptStudent(student2);