// Q1
const array = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];
// Ascending
console.table(array.sort((a, b) => a - b));
// Descending
console.table(array.sort((a, b) => b - a));
// Numbers larger than 5
console.log("Numbers larger than 5");
console.log(array.filter((item) => item > 5));
// Display Max and Min Number
console.log("Display Max and Min Number");
console.log(array.reduce((previousValue, currentValue) => previousValue > currentValue ? previousValue : currentValue));
console.log(Math.max(...array));
console.log(array[array.length - 1]);
console.log(array[0]);
// Array.from function
console.log("Array.from function");
const arrayCopy = Array.from(array, (item) => item * 5);
console.table(arrayCopy);
// Remove repeated numbers
console.log("Remove repeated numbers");
console.log(arrayCopy.filter((value, index,array) => array.indexOf(value) === index));
console.log(arrayCopy.filter((value) => value % 2 === 0).length);
console.log(arrayCopy.filter((value) => value % 2 === 0).join("*"));

/// Q2
function makeItRandom(max,min,length) {
    // check if the length is even
    if(length % 2 !== 0){
        return [];
    }
    // random numbers within range
    const getRandomNumbers = () =>
        Math.round(Math.random() * (max - min) + min);
    // fill the array with random numbers
    const array = Array.from({length: length / 2},
        () => getRandomNumbers())
        .flatMap((number) => [number, number]);
    return shuffle(array);
}
console.log(makeItRandom(10,1,6));

/// Q3
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

let shuffledArray = shuffle([1, 2, 3, 4, 5]);
console.log(shuffledArray);

/// Q4
function courseDetails(numStudents, numCourses) {

// Function to prompt the user for a grade
    function promptForGrade(studentName, courseName) {

        let grade = prompt(`Enter the grade for ${studentName} in ${courseName}:`);
        while (!grade || isNaN(grade)){
            grade = prompt(`Invalid input. Renter the grade for ${studentName} in ${courseName}: `);
        }
        return parseFloat(grade);
    }

// Function to calculate the average of an array of numbers
    function calculateAverage(arr) {
        if (arr.length === 0) return 0;
        let sum = arr.reduce((total, grade) => total + grade, 0);
        return sum / arr.length;
    }


// Create a 2D array for grades
    const myArray = Array.from({ length: numStudents }, () => []);

// Fill the array with grades
    for (let i = 0; i < numStudents; i++) {
        for (let j = 0; j < numCourses; j++) {
            myArray[i][j] = promptForGrade(`Student ${i + 1}`, `Course ${j + 1}`);
        }
    }

// Display the 2D array using console.table
    console.table(myArray);

// Display average grade for each course
    for (let j = 0; j < numCourses; j++) {
        let courseGrades = myArray.map(studentGrades => studentGrades[j]);
        let averageGrade = calculateAverage(courseGrades);
        console.log(`Average grade for Course ${j + 1}: ${averageGrade.toFixed(2)}`);
    }

// Display total grades for each student
    for (let i = 0; i < numStudents; i++) {
        let totalGrade = myArray[i].reduce((total, grade) => total + grade, 0);
        console.log(`Total grade for Student ${i + 1}: ${totalGrade.toFixed(2)}`);
    }
}