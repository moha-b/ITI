
let intervalId = 0;
window.addEventListener("load",function () {
    let divContainer = document.querySelector(".container");
    let divsList = divContainer.children;
    let imageObject = document.images[0];
    let nextButton = document.querySelectorAll("button")[0];
    let previousButton = document.querySelectorAll("button")[1];
    let slideShowButton = document.querySelectorAll("button")[2];
    let stopButton = document.querySelectorAll("button")[3];

    // Q2
    function handleClick() {
        let clonedNode = this.cloneNode();
        divContainer.appendChild(clonedNode);
        this.onclick = null;
        clonedNode.onclick = handleClick;
    }
    for (let i = 0; i < divsList.length; i++) {
        divsList[i].onclick = handleClick;
    }

    // Q1
    nextButton.onclick = function () {
        playNextImage(imageObject);
    };
    previousButton.onclick = function () {
        playPreviousImage(imageObject);
    };
    slideShowButton.onclick = function () {
        playSlideShow(imageObject);
        nextButton.onclick = null;
        previousButton.onclick = null;
        slideShowButton.onclick = null;
    };
    stopButton.onclick = function () {
        clearInterval(intervalId);
        nextButton.onclick = function () {
            playNextImage(imageObject);
        }
        previousButton.onclick = function () {
            playPreviousImage(imageObject);
        };
        slideShowButton.onclick = function () {
            playSlideShow(imageObject);
        }
    }
});