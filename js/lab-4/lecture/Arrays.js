// Variables   let and const 
// Primitives Datatypes ,  Language Objects (String ,Number,Math,Date,Array)
// BOM (Browsers Object)


//-----------------------------------------------------
//definition   [] or new Array()
// let numbers=new Array(2);
let numbers=[2,3,4,5,6,1,12,3];  
// numbers[12]=1000;
//datatypes
// scores.constructor.name //Array --> object
// grades.constructor.name //Array --> object


//for loops  --> 0, for loop, for in (in operator) , for of , foreach


for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}

console.log("*************************************");
for(let index in numbers)
    console.log(numbers[index]);


console.log("*************************************");
for(let item of numbers)
{
    console.log(item);
    item.toFixed(2);
}  


//--------------- filter item greater than value
// let result_1=filtergreaterThanValue(numbers,3);
// console.log(result_1);
// result_1=filtergreaterThanValue(numbers,4);
// console.log(result_1);

//   create filter function to filter array item > 5



//--------------  calling filter generic function
// toqa     item>6

result_1=filter(numbers,filterGreater);

// mossad
result_1=filter([3,1,4,2,5,6,73],filterSmallerThan);


//kareem
result_1=filter(numbers,function(item){ return item>10})// Anynmous function

//Menna
result_1=filter(numbers, (item,index)=> item<3);//Anynmous function


console.log(numbers);
// numbers.sort((a,b)=>{
//     if(a>b) return 1
//     else if(a<b) return -1
//     else return 0
// });

numbers.sort((a,b)=>a-b);

console.log(numbers);
















//sparse array (Bad array type --> delete operator(reserved word) )
//delete sparesArray---> forbidden
// let sparesArray=new Array(40)//(40) [empty × 40]
// sparesArray[0]=1;
// sparesArray[4]=2;
// sparesArray[100]=100;//[empty × 100, 100]
// grades[100]=100; (101) [10, empty × 99, 100]


// array's methods push, pop, shift,unshift,splice,slice,concat,reduce and map

//grades.push(3);
//grades.push(4,6,8,7,9);  
//grades.pop() //9   length--;
//grades.unshift(99)
//grades.shift();
//grades.splice(1);
//grades.splice(1,0,66,5)// [10, 66,5, 3, 4, 6, 8, 7, 9]
//grades.splice(1,2); // [10, 6, 8, 7, 9] 


//eval with join --> forbidden never use eval in your code
// eval(grades.join("+"));


/********** rest ... */


/**********
 * spread
 */
//1-
// Math.max(...numbers);
// //2- 
// let numbers_clone=[...numbers];//;numbers;

// //3- gathering
// let grade_lab1=[2,1,4,3];
// let grade_lab2=[20,10,40,30];

// let grades=[...grade_lab1,...grade_lab2];

