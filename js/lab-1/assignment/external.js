// Todo: Q2, Q3

// Q3, a
// gives us "Number1 value before definition: undefined" but it'd contain executing
// in case we remove the var keyword "ReferenceError: number1 is not defined" happens,
// but the rest of the fill will not be executed due to the exception.
//console.log("Number1 value before definition: " + number1 + "in external js");
// Uncaught ReferenceError: Cannot access 'number2' before initialization
//console.log("Number2 value before definition : "+number2);
//gives us "Uncaught ReferenceError: Cannot access 'number3' before initialization"
//console.log("Number3 value before definition: "+number3);

// Q2, a
number1 = 3;
let number2 = 2.9;
const number3 = 0xff;

//b
let firstName = "\"Mohab\"";
let middleName = "\`Khalid\`";
let lastName = `Mahmoud`;

// the output from console is
// ["Mohab" `Khalid` Mahmoud]
console.log(`Username : ${firstName} ${middleName} ${lastName}`);

//c
let flag = true;

// self task
console.log("print new line" + "\n" +`another way
does this work\nit's worked`);

//d
console.log("This is the External JavaScript file");

// Q3, i
firstName[3] = "A";
firstName[3] = 'A';
console.log(`first name: ${firstName}`);

console.log(`number1: ${typeof number1}`);
console.log(`number2: ${typeof number2}`);
console.log(`number3: ${typeof number3}`);
console.log(`firstName: ${typeof firstName}`);
console.log(`middleName: ${typeof middleName}`);
console.log(`lastName: ${typeof lastName}`);


console.log(`ensure the file executed`);