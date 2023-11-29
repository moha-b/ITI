/***************
 *  Type Conversion
 *  convert from Data Type to Another
 *  implicit or explicit
 *   
 *  Implicit : Number() , String () , Boolean() 
 *  Explicit : Coercion
 */

// Number("eman");
// Number("33");
// String(45);
// Boolean("ahmed");
// Boolean(0);

// console.log("20"+10);
// console.log(true+1);
//console.log(undefined+ 40);
//+ any string will be converted  to String

/*
****************************Truthy and Falsy Values ----------------------------
    IN JS there are 5 falsy values : 0, '', undefined,null , NaN
    Then now try explicit casting using Boolean function
    Boolean("")
    Boolean(0)
    Boolean(null)
    Boolean(undefined)
    Boolean(NaN)

   1- in logical operators      +  typeof - *
    (''||"eman")
    (true||0)
    let number||=3;
   2- Logical context like if(""||"eman")
   
   
/*********************** Day2 Functions in Javascript 
 * 1- function declaration
 * 2- function Expression
 * 3- arrow function  ES6
 * 4- anonymouse function 
 * 5- call back function
 * 6- IIFE (Immidiately Invoked Function Expression)
 * *************************/

//---------------------- 1- Function Declaration ----------------------
/**
 *   void  juiceMaker(void){   return}
 *   int  juiceMaker(int number,char[] name)
 */




//-------  1- No-input and No return  
// juiceMaker();
// function juiceMaker()
// {
//   console.log(" Hello Juice Maker");
// }


// //------calling before and after creation
// juiceMaker();


//------- typeof function???
//function
//-------what if you define varibales with the same function name?
// let juiceMaker=90;

//-------what if you redefine another function the same function name?
// function juiceMaker(number)
// {
//   console.log(" Hello Juice Maker");
// }


//-------  2- No-input with return value
// function juiceMaker()
// {

//    return " Hello Juice Maker";

// }

// let result=juiceMaker();
// console.log(result);
// console.log(juiceMaker());

// //-------  3- with input and return value --------------
//------------------------- variables with functions local and global
// let oranges=5;
// let apples=9; 
// // let makerDuration=""; forbidden with functions  line 99
// function juiceMaker(oranges,apples)
// {
//    var makerStatus="making process";//local variable (let and const)
//    makerDuration="30 mintues";      //global varible not recommended
//    return ` Hello Juice Maker : ${oranges} : ${apples} ` ;

// }

// calling  with too many and few parameters 
// console.log(juiceMaker(2,3));
// console.log(juiceMaker(oranges,apples));
// console.log(juiceMaker());   // with few params
// console.log(juiceMaker(50,60,70,80));   // with many params


/*********************************************
 * Aguments Array-Like  for functions (holds all input in calling)
 */
function juiceMaker(oranges,apples) // var oranges=2; var apples=2;
{
  // if(!oranges) oranges=2;
  // if(!apples) apples=2;
  // oranges||=2;
  // apples||=2;

   console.log(arguments);
   return ` Hello Juice Maker : ${oranges} : ${apples} ` ;

}
console.log(juiceMaker(50,60,70,80));
console.log(juiceMaker(30));


// function sum()
// {
//   let result=0;
//   for(let i=0;i<arguments.length;i++)
//   result+=arguments[i];

//   return result;

// }




//---------------------- 2- Function Expressions with var, let and const ----------------------
// functions as a variable
// const juiceMaker=function(oranges,apples){

//    console.log( ` Hello Juice Maker : ${oranges} : ${apples} ` );

// }






/********************************
  ES6  Defualt aguments parameters
*/

/********************************************* 
 * 3- Arrow Functions ES6  + function expressions  // no arguments array-like
*/
// i/p => o/p  === "function"

let getStudentData=()=>{console.log("student data");}
    getStudentData=()=>console.log("student data");
    getStudentData=(id)=> ` id = ${id}`;
    getStudentData=id=> ` id = ${id}`;
    getStudentData=(id,name)=>{ 
      
                                // console.log(arguments);
                                return ` id = ${id}`};

//calling
getStudentData(2,"ahmed")

/*********************************************
 * Built-in functions 
 *  parseInt, parseFloat , Number , isNaN
 *  alert, prompt and confirm
 */


/*  Summary 
        Global Scope (script access every where)
        Function Scope (inside fuctions also known as local scope)
        Blocks Scope(ES6) with let and const inside curly braces
*/






