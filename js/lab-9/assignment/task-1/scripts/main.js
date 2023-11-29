

window.addEventListener("load", function () {
    let employee1 = new Employee("Jett Smurfing", "Female", 50000, "Korean");
    employee1.name = "Name Changed";
    createProfileCard(employee1);

    let employee2 = new Employee("Mohab Khalid", "Male", 60000, "Arabic");
    createProfileCard(employee2);

    console.log(`Total Persons: ${Person.getCount()}`);

})