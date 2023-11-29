
(async function(){

        try{
                
                let response=await fetch("http://localhost:8080/departments");
                let data=await response.json();
                document.querySelector("div.result").append( createTable(data));
                console.log(data);
        }catch(error)
        {
            console.log(error);
        }

})();

window.addEventListener("load",function(){

    let saveDepartment=this.document.querySelector("input[value=save]");
    let departmentNameIdElm=document.querySelector("input[name=departmentId]");
    let departmentNameNameElm=document.querySelector("input[name=departmentName]");


     saveDepartment.onclick=async function(){

            // let department={
            //     id:departmentNameIdElm.value,
            //     name:departmentNameNameElm.value,
            // }

            // try{
            //     let response=await fetch("http://localhost:8080/departments",{
            //         method:"post",
            //         body:JSON.stringify(department),
            //         headers:{
            //             "Content-Type":"application/json"
            //         }
            //     });
            //     let data=await response.json();
            //     console.log(data);

            // }catch(error)
            // {

            //     console.log(error)
            // }


            try{
                let response=await fetch("http://localhost:8080/departments",{
                    method:"delete",
                    body:JSON.stringify({id:departmentNameIdElm.value}),
                    headers:{
                        "Content-Type":"application/json"
                    }
                    
                });
                let data=await response.json();
                
                console.log(data);

                }catch(error)
                {
    
                    console.log(error)
                }
                
            }

});

















