// search bind , apply , call

/******************
 * JSON
 * server send list of students
 * Objects on netwrok (serialization)  but stringify
 */
// let student={id:1,name:"xxx yyy",age:20, getData(){}};
// let students=[student,student];
//1-  definition
//let stringifyStudent=N.stringify(student)
//JSON.parse(stringifyStudent)

//2- const and let
// const student={id:1,name:"xxx yyy",age:20, getData(){}};
// 3- spread  operator
// osStudent={...student}
// osStudent={id:200,...student,email:"xxx@gmail.com"}

// 4-  when to use arrow function
// let car ={
//     model:"pmw",
//     year:2023,
//     speed:0,
//     move(){
//         setInterval(()=>{
//             this.speed+=10;
//             console.log(this);
//         },1000)
            
//     }
// }
// car.move();


/***********************************************
 *  Class   ES5   using Functions  (constructor functions)
 *    body of the function (constructor) only one constructor
 *      inside function's  body should use this with properties and functions
 */



// const Person=function(name="",birthYear=1970){
//         if(this.constructor.name=="Window")
//         {
//             throw  new Error("Person should be called as a class");
//         }
//         this.fullName=name;
//         this.birthYear=birthYear;
//         // this.calaculateAge=function(){
//         //     return 2023-this.birthYear;
//         // }
        
// }
// Person.prototype.calculateAge=function(){return 2023-this.birthYear}
//static property
/** testing
 * Person.prototype
 * Person.prototype.calculateAge=function(){return 2023-this.birthYear}
 * Person.prototype
 * person_1.calculateAge()
 */

// create Object
// calling as a class
// let person_1=new Person("xxx",1970);
// let person_2=new Person();
// calling as a function
// Person("yyy",1990);



/*********************************  prototype for function (linking) */


/*************************************
 * Classes in ES6 with class keyword
 * 1- class declaration
 * 2- class expression
 */

// new Person(); // Error before class definition
// class Person
// {

// }

// const Person=class{

// }

// typeof Person  // functions
//Person() // Error




// class Person
// {
//     //ES10   private  #
//     // 1-  define inthe class body //2- use it
//     #id;
//     static #count=0;
//     constructor(id,name="",birthYear=1970)
//     {
//         this.fullName=name;
//         this.birthYear=birthYear;
//         this.#id=id;
//         Person.#count++;
//     }

//     //concise 
//     calcaulateAge()
//     {
//         return 2023-this.birthYear;
//     }
//     //override
//     toString()
//     {
//         return `${this.fullName}`;
//     }
//     //---------------------setter and getter for ID
//     // Old fashion set and get
//     // getId()
//     // {
//     //     return this.#id;
//     // }
//     // setId(value)
//     // {
//     //     this.#id=value;
//     // }

//     get id()
//     {
//         return this.#id;
//     }
//     set id(value)
//     {
//         this.#id=value;
//     }

//     static get count()
//     {
//        return Person.#count;
//     }



// }

// // 1- create object before adding the constructor 
// let person_1=new Person(1);
// let person_2=new Person(2,"xxx",1980);
// //using old fashion setter and getter
// // console.log(person_1.getId());
// // person_1.setId(20);
// // console.log(person_1.getId());

//  // using setter and getter properties
person_1.id;   // get
person_1.id=30; //set

// // using static count
// // console.log(Person.count);
// console.log(Person.count);




class Shape
{
    constructor(color)
    {
        this.color=color;
    }
    draw()
    {
        return "This is Shape ";
    }
}

class Rectangle  extends Shape
{
    constructor(position={x:0,y:0},width=3,height=3,color="black")
    {
        //first line
        super(color);
        this.position=position;
        this.height=height;
        this.width=width;
    }
    draw()
    {
        return "This is Rectangle";
    }
}



class Square extends Rectangle
{
    constructor(position={x:0,y:0},dim,color="black")
    {
        super(position,dim,dim,color)
    }
}



let rectangle_1=new Rectangle({x:2,y:6},3,4,"red");
let rectangle_2=new Rectangle({x:0,y:0},6,7,"yellow");


let sqaure_1=new Square({x:0,y:0},6,"green")






