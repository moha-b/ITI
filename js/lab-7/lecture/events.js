console.log(this);



window.addEventListener("load",function(){
let divBox=this.document.querySelector("#divBox");
let submitBtn=this.document.querySelector("input[type=submit]");
let nameTxtBox=this.document.querySelector("input[name=nameTxtBox]"); 
let ageTxtBox=this.document.querySelector("input[name=ageTxtBox]"); 
 nameSpanError=document.querySelector("span");
divBox.onmousemove=function(event){
    console.log(this);//submit
    //   console.log(event.x,event.y);
       this.innerText=`${event.x} : ${event.y} `
    } 
 
//sumbit
submitBtn.onclick=function(event){
//name id,grade ,email
     
    event.preventDefault();
}

// validation
nameTxtBox.onblur=function()
{
    if(this.value=="")
    {
            nameSpanError.classList.add("show");
    }
    else
    nameSpanError.classList.remove("show");

}

 ageTxtBox.onkeypress=function(event){
    if(isNaN(event.key))
    {
        event.preventDefault();
    }
 }


});//load

// [].filter((item)=>item>5);









// divBox.onclick=function(){
//     let newItem=this.cloneNode();
//     document.body.append(newItem);
//     newItem.onclick=this.onclick;
//     this.onclick=null;

// }

