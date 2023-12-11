let mainButton=document.querySelector(".main-branch-span");
let normalButton=document.querySelector(".normal-branch-span");
let smartBranch=document.querySelector(".smart-container");
let normalBranch=document.querySelectorAll(".normal-branch");

mainButton.addEventListener("click",function(){
   normalBranch.forEach(branch=>branch.style.display="none");
    smartBranch.style.display="block";
})
normalButton.addEventListener("click",function(){
    smartBranch.style.display="none";
  normalBranch.forEach(branch=>branch.style.display="block");
})