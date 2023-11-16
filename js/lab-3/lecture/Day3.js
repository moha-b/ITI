/*********************************************************
 * 
 *  Language Objects (built-in classes in javascript)
 *  Javascript is Object-based Language
 * 
 */


//-------------- String Class-------------------------

//class String
let userName=new String("eman fathi ITI instrcutor");
userName.constructor.name //   class name String

typeof userName ; // object

let courseName="javascript";

typeof courseName ; //string



console.log(userName.split());
console.log(courseName.split());


//different between "" ans new String();   wrapping

//1- warpping of premitive inside object new String(courseName)
//2- call split()
//3- ; destroy the object

// for documentation https://devdocs.io/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript

//length ,toLowerCase() , toUpperCase()
//indexOf , lastIndexOf  //email
//substring, substr, split
//replace     // regular Expressions  --> search (match)


//-->   functions chaining
// courseName.toUpperCase().indexOf("A");
//  let resultUpper=courseName.toUpperCase();
// let searchingIndex=resultUpper.indexOf("A");

//search i --> indexOf("i")
// let resultLower=myName.toLowerCase(); "eman iti instructor"
// let index=resultLower.indexOf("i")


// -- Number Class------------------------- v137
/**
 * Numbers stored as 64 base 2 format  , so its stored as binary format
 */
// let number=new Number(22.456);
//define object and using the methods
// Number.MAX_SAFE_INTEGER

//type conversion
// Number("33")

// -----------  Numeric Seperator _ 1000,000,000

//------------ Math Class 

