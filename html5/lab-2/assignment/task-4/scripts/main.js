import {dropImage as dropImage, endDrag, startDrag} from "./functions.js";

window.addEventListener("load", function () {
    let images = this.document.querySelectorAll("img");
    let topElement = this.document.querySelector("#draggable-view");
    let bottomElement = this.document.querySelector("#dropped-view");
    let imagesCount = images.length;
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("dragstart", startDrag);
        images[i].addEventListener("dragend", endDrag);
    }

    bottomElement.addEventListener("drop", function (event) {
        console.log(event.target.getBoundingClientRect());

        imagesCount--;
        if (imagesCount === 0) {
            topElement.innerText = "Empty";
        }
        dropImage(event, bottomElement);
    });

    bottomElement.addEventListener("dragover", function (event) {
        event.preventDefault();

        event.target.style.backgroundColor = "lightgreen";
        dropImage(event, bottomElement);
    });

    topElement.addEventListener("dragleave", function (event) {
        event.preventDefault();
    });
}); //load