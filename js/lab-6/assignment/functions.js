let images = [1,2,3,4,5,6,7,8];
let index = 0;
const playNextImage = (imageObject)=>{
    index = checkOnNextIndex(index);
    imageObject.src = `images/${images[index]}.jpg`;
}
const playPreviousImage = (imageObject)=>{
    index = checkOnPreviousIndex(index);
    imageObject.src = `images/${images[index]}.jpg`;
}
const playSlideShow = (imageObject,stopOtherAction)=>{

    intervalId = setInterval(function () {
        let randomNumber = Math.floor(Math.random() * images.length) + 1;
        imageObject.src = `images/${randomNumber}.jpg`
    },1000);
}
const checkOnNextIndex = (index) =>{
    if(index < images.length-1){
        index++;
    }else index = 0;
    return index;
}
const checkOnPreviousIndex = (index) =>{
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1;
    }
    return index;
}
