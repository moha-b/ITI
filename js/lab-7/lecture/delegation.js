window.addEventListener("load",function(){

    let ulObject=document.querySelector("ul");
    let liObjects=document.querySelectorAll("li");
    let divObject=document.querySelector("div");



    
    divObject.onclick=function(event){
        console.log("DIV");
        // console.log(event.target);
    }


    ulObject.onclick=function(event){
        //  console.log(event);
        if(event.target.localName=="li")
        {
            console.log("li");
        }

        event.stopPropagation();
    }


    // for(let i=0;i<liObjects.length;i++)
    // {
    //     liObjects[i].onclick=function(){
    //         // console.log("LI");
    //     }
    // }

    let newLi=document.createElement("li");
    newLi.innerText="New Li";
    ulObject.append(newLi);
    // newLi.onclick=function(){
    // //     console.log("LI");
    // // }





});//load