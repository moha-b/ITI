console.log(" Hello from Extrernal File");

/**************** ES5  Types, values and variables **********/
   
/**   ES5 varaibles Declarations
 *    -define varibales with var keyword  (Global variable through entire script and the following scripts)
 *    -without var keyword is not recommended 
 */
// full_name || fullName


/************* primitive data types ************************/
//loosely type language



//best practice
var numberInt=2;    // global context 


// consol.log("hello");// Error--- syntax Error

//forbidden
numberFloat=2.2; 

//print them on screen
console.log(numberInt);


//call the variable with case-sensetivity

//typeof operator 
// typeof numberInt


//what if the variable inisde another script?!


//--------------- 2- string  immutable  ES5 --> " and ' , ES6 ---> `(backtick) which is better
//ES5
var studentName="Ahmed";
var instructorName="Ali  \" 'ITI instructor'";
var htmlCode="<table><tr><td>"+studentName+
            "</td><td>"+instructorName+"</td></tr></table>"

//ES6   Template ${}
htmlCode=`<table>
            <tr>
                <td>${studentName}</td>
                <td>${instructorName}</td>
            </tr>
        </table>`;



/*
* JS dynamic typing ---------------------------
*/

htmlCode=4;


// Bolean
var flag=true;

//undefined  empty value

var courseName;
// typeof studentObject --> undefined


//------------ Object null datatype  empty object
var studentObject=null;
// typeof studentObject --> object
// studentObject==courseName  true


/**************
 * var Problems
 1- reassign variable	
 2- none block variable expect functions
------------------------	Hoisting 
before execution , code is scanned  for varibales declarations
var varibles and function declarations


/*  ES6 variables declarations (block scoping)
    let , const and var -------------------------

*/

// console.log(jsCourseHours);  // Exceotio
let jsCourseHours=40;