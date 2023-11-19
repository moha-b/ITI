/******************
 * DOM is the interface between JS code and the browser
 * DOM is an API that contains lots of Methods
 * web APIs : functionalities provided  to the engine but
    they are not part of JS language itself (DOM ,timers and fetchapi)
    JS access them through global window object
    and they are also a part of memory runtime

    webAPIs are like libraries that browsers implement and that we can access
    from our javascript code 
 *
 */

// document.documentElement;  <html> tags
// document.head or document.body

/****** I will start with query selector direct and the other will be for reading */

//1- demoes on query selectors and how to loop among them

    //show them DOM methods and properties 

//2-  attributes as properties   (setting and getting) 
//a- src , class name, id  
//b- add designer attribute which is not a standard 
//(won't appear as a property)  but get attribute method will get it

//Note :    getAttribure("src") -> relative 
//        .src                  --> absolute
// the same for href


//3- properties for elements   textContent and value 

//4- style property and classList
// window.getComputedStyle(document.images[0]).width  --> this is the best way always to get values

        // -- what is the differnce in run time between adding 
        // object.style.color , and object,style.setProperty("color","red")




//5- create , insert and delete elements

/**
 * 1- create  li element
 * 2- add class list to it
 * 3- innerHTML    content with anchor
 * 4- show on memory
 * 5- append(lastChild) prepend(firstChild)  [before,after]
 * 6- what if we use the 5 two methods with each other --> movement
 * 7- cloneNode
 * 8- delete element
 */