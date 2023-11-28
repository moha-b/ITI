const getStudentById=function(id)
{
    return new Promise((resolve,reject)=>{
        // get id
        // resolve({id,name:"xxx",email:"xxx@gmail.com"})
        resolve(null);
        // reject("DB connection error studentby ID")
    })
}

const getStudentCourses=function(id){
    return new Promise((resolve,reject)=>{
        // resolve({id,courses:["x","y","z"]});
        reject(" there are nor courses");
    })
}