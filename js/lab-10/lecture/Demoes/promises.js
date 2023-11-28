// // promise (Async task)
// // console.log("start");
// let promise=new Promise((resolve,reject)=>{
//     //code
//     setTimeout(()=>{
//             //code []
//             if(!true)
//             resolve([{},{}]);
//             else
//             reject("DB connection Error");
//     },2000);
// })
// .then((result)=>{
//     console.log("success", result);
// }).catch((error)=>{
//   console.log("error",error);  
// })





// console.log("end");




// real world only consuming
// /************************** */
// getStudentById(2)
// .then((object)=>{
//     console.log(object);
// })
// .catch(error=>{
//     console.log(error);
// });
// /************************** */0
// getStudentCourses(2)
// .then((object)=>{
//     console.log(object);
// })
// .catch(error=>{
//     console.log(error);
// });




getStudentById(3)
.then((object)=>{
    if(object==null)
    throw new Error("student doesn't exist");

    console.log("then of student by id");
   return getStudentCourses(object.id);
   
})
.then((result)=>{
    console.log(result);
})
.catch(error=>{console.log(error)})







