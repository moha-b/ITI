let birdInterval = 0;

const instantiateBird = function() {
    let birdImage = document.createElement("img");
    birdImage.src = "images/bird.gif";
    birdImage.style.position = "absolute";
    let left = 0;
    moveLeft(birdImage, left);
    birdImage.onclick = function () {
        birdKilled(birdImage);
    };
    birdImage.onmouseover = function () {
        this.style.cursor = "crosshair";
    };
    return birdImage;
}

const birdKilled = (imageObject) => {
    clearInterval(birdInterval);
    let top = 0;
    imageObject.src = "images/egg.png";
    let id = setInterval(() => {
        top += 8;

        if (top < window.innerHeight - imageObject.height) {
            imageObject.style.top = top + "px";
        } else {
            clearInterval(id);
            imageObject.src = "images/broken.png";
            setTimeout(function () {
                imageObject.remove();
            }, 2000);
        }
    }, 50);
}

const moveRight = (imageObject, left) => {
    birdInterval = setInterval(() => {
        left += 10;

        if (left < window.innerWidth - imageObject.width) {
            imageObject.style.left = left + "px";
        } else {
            clearInterval(birdInterval);
            imageObject.classList.add("flip");
            moveLeft(imageObject, left);
        }
    }, 50);
}

const moveLeft = (imageObject, left) => {
    birdInterval = setInterval(() => {
        left -= 10;
        if (left >= 0) {
            imageObject.style.left = left + "px";
        } else {
            clearInterval(birdInterval);
            imageObject.classList.remove("flip");
            moveRight(imageObject, left);
        }
    }, 50);
};
