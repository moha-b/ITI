//Choose just one function from these 3 
// TODO: All test cases should pass (fix the functions if needed).


//problem 1
/**
 * @return {string} the string after capitalizing every word's first character.
 * @param {string} text the string to capitalize every word's first character in.
 * @example capitalizeTextFirstChar("i'm ahmed ali") ===> "I'm Ahmed Ali"
 */

exports.capitalizeTextFirstChar = (text) => text.split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');

// test cases:
/* 
1-test that the function takes a string it will return type to be a string
2-test that the function takes a string and return it after capitalize it
 */
// //////////////////////////////////////////////////////////////////////////////////////////////



//problem 2:
/**
 * @return {Array<number>} an array with the specified length. the array elements will be from 0 to the length(value of length not included) .
 * @param {number} length number of elements
 * @example createArray(3) => [0,1,2]
 * @example createArray(5) => [0,1,2,3,4]
 */

exports.createArray = (length) => Array.from(Array(length).keys());


// test cases:
/* 
    1-test that the return value of type array
    2-test if we pass 2 it will return array of length 2 and test it includes 1
    3-test if we pass 3 it will return array of length 3 and test it doesn't include 3
*/


//problem 3:
/**
 * @return {number} a random number in range of min and max (including min and max).
 * @param {number} min starting of the range
 * @param {number} max end of the range
 
 * @example random(2,9) => a random number in range (2,3,4,...,9)
 */
exports.random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
// test cases:
/* 
    1-test that the return value is a number
    2-test if we pass 5,7 it will return a number >= 5 and <= 7
    3-test if we pass 3 it will return NaN
*/
// /////////////////////////////////////////////////////////////////////////////////////////

//  bonus: 
// problem 4: search for TDD 'Test Driven Development' and use it to implement function 'removePropertyFromObject' that should pass these test cases:
/* 
1-should take property/key and check that's defined in that object or throwing an error
2-should return type of object
3-should return the object without the property/key (name) passing as parameter
    ex.:
    //if obj = {a:1,b:2,c:3} and wants to remove "b" , function expect to return ==> { a: 1, c: 3 }
 */