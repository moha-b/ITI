const array = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];

// Q1

// Sort them ascending then descending

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
console.log(Math.min(...array));
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

// Q2
console.log(makeItRandom(10,1,6));

// Q3
console.log(shuffle([1, 2, 3, 4, 5]));

// Q4
courseDetails(4,5);