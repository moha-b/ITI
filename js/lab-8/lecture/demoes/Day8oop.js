//*********************** Anonymous Objects (without classes) */
//share information (between server and client , clinet and client , input for a function, return information from a function)

//syntax  --> arrays synatx , numbers=[2,3]
//syntax  --> {}  , new Object()
// let object={ 
//     id : 2 ,
//     name:"eman"
//}
// typeof --> object , constructor.name  Object

// let instructor={
//     id:1,
//     fullName:{firstName:"xxx",lastName:"yyy"},
//     friends:["x","y","z"]
// };


//****  calling for properties   . and []
// instructor.age;  //getting
// instructor.age=30;  //setting
// instructor["age"] // getting
// instructor["age"]=90; //setting

// instructor.name;  //non exsting proprty -? undefined
// instructor.fullName.firstName;
// instructor.fullName["firstName"];
// instructor["fullName"]["firstName"];


// //******************for loops For any Object
// for(let property in instructor)
// {
//     console.log(property,instructor[property]);
// }

// let students=[{id:1,fullName:"xxx xxx"},
//               {id:2, fullName:"yyy yyy"}];


// let trObject;
// let tdObject1;
// let tdObject2;
// for(let i=0;i<students.length;i++)
// {
//     trObject=document.createElement("tr"); //<tr></tr>

//     tdObject1=document.createElement("td");//<td></td>
//     tdObject1.innerText=students[i].id;

//     tdObject2=document.createElement("td");//<td></td>
//     tdObject2.innerText=students[i].fullName;

// }
// for(let i=0;i<students.length;i++)
// {
//     trObject=document.createElement("tr"); //<tr></tr>
//     for(let property in students[i])
//     {
//         tdObject=document.createElement("td");//<td></td>
//         tdObject.innerText=students[i][property];
//         trObject.append(tdObject)
//     }

// }


//****************** Adding in run time for new Property   
// instructor.canSleep=false; //setting for non Exist property
// instructor["canSleep"]=false;
//****************** deleting in run time for new Property   
// delete instructor.id;
// delete instructor["id"];

/********************    Functions inside Object  (what about toString?) */

let instructor={
    id:1,
    fullName:{
                firstName:"xxx",
                lastName:"yyy", 
                toString(){return this.firstName+" "+this.lastName}
            },
    friends:["x","y","z"],
    //ES5
    study:function(){
        console.log(this.fullName," is studying")
    },
    //ES6  concise Method
    sleep(){
        console.log(this.fullName," is sleeping")

    }
    ,
    //override
    toString()
    {
        // return this.fullName.firstName+" "+this.fullName.lastName;
        return this.fullName.toString();
    }

};


//************calling
// instructor.canSleep();
// instructor["canSleep"]();

//***********  add and delete functions  on run time
// instructor.move=function(){
//     console.log("move");
// }
// instructor["move"]=function(){
//     console.log("move", this.id);
// }
//**********************Forbidden  calls
//adding for function on run time
// instructor.study=()=>{}

//*************************** toString function */
console.log(instructor+""); // withou override [object Object]
//after override

//*************** where we can use Object ?????*/
//Object literal on creation

// 1- take the input values as a function input
function  inserStudent(fullName,email,age=0,address="",phoneNumber="",password="")
{
    //code
}
//{age=0,address="",phoneNumber="",password=""}
// with Literal objects
function  inserStudent(fullName,email,options={age:0,address:"",phone:""})
{
    //code
    let student={studentName:fullName,email:email,age:options.age};
    // for(in )

    return student;
}


//calling
inserStudent("eman fathi","xxx@gmail.com",20,"")

// use objects
//documentation option :{age,phoneNumber,address,password}

// 2- return many values from function (or we can use it as a factory function)
// const bookStore=function(books)//[{},{}]
// {

//     // for(){}

//     return {
//         basicbooks:books,
//         getTotalPrice(){return books.reduce()}
   
// }




//3-  JSON (Javascript Object Notation)














