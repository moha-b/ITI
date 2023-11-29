/****************************
 * Event --> Action
 * Event --> Object -->EventHandler     onevent
 *                     onclick
 *                     onkeypress
 *                      onmouseout
 *                      onmouseover
 */
/****   How to bind event to any html element */

//1- insde HTML tage --> forbidden
//2- bind as prperty

//find element
window.addEventListener("load",function(){

   let  buttonObject=document.querySelector("button");
   let divBox=document.querySelector("div") ;

   //----------------- start button
    buttonObject.onclick=function(){
        console.log("Hello");
    }
    //remove event
    buttonObject.onclick=null;
    /****************** Div events */
    //1- mouseover
    divBox.onmouseover=function(){     // this keyword
        this.classList.add("bPink");   
    }

    //2- mouseout
    divBox.onmouseout=function(){     // this keyword
        this.classList.remove("bPink");   
    }
   






});//load


