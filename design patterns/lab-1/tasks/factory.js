class Grade {
    constructor(label) {
        this.label = label;
    }

    getGrade() {
        return this.label;
    }
}

class Excellent extends Grade {
    constructor() {
        super('Excellent');
    }
}

class VeryGood extends Grade {
    constructor() {
        super('Very Good');
    }
}

class Good extends Grade {
    constructor() {
        super('Good');
    }
}

class Pass extends Grade {
    constructor() {
        super('Pass');
    }
}

class Fail extends Grade {
    constructor() {
        super('Fail');
    }
}

function createGrade(percentage) {
    if (percentage > 90) {
        return new Excellent();
    } else if (percentage > 75) {
        return new VeryGood();
    } else if (percentage > 65) {
        return new Good();
    } else if (percentage >= 50) {
        return new Pass();
    } else {
        return new Fail();
    }
}

const student = 15;


const student1Grade = createGrade(student);


console.log(`Student : ${student1Grade.getGrade()}`);