class Teacher {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(`Teacher: ${this.name}`);
    }
}

function addDynamicProperties(teacher, salary, nationality, street) {
    const decoratedTeacher = Object.create(Teacher.prototype);

    for (let key in teacher) {
        if (teacher.hasOwnProperty(key)) {
            decoratedTeacher[key] = teacher[key];
        }
    }

    decoratedTeacher.salary = salary;
    decoratedTeacher.nationality = nationality;
    decoratedTeacher.street = street;

    return decoratedTeacher;
}

const baseTeacher = new Teacher("hab");
const decoratedTeacher = addDynamicProperties(baseTeacher, 10, "EGP", "el-zawya el-hamraa");

baseTeacher.display();
console.log("\nOriginal Teacher:", baseTeacher);

console.log("\nDecorated Teacher:");
decoratedTeacher.display();
console.log("Salary:", decoratedTeacher.salary);
console.log("Nationality:", decoratedTeacher.nationality);
console.log("Street:", decoratedTeacher.street);