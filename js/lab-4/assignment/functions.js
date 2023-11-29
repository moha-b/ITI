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


/// Q3
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

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

    console.table(myArray);

// Display average grade for each course
    for (let j = 0; j < numCourses; j++) {
        // get each column
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