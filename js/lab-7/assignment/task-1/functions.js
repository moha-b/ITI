let score = 0;
const getRandomPosition = () => {
    const margin = 200; // Adjust the margin as needed
    const maxWidth = window.innerWidth - margin;
    return Math.floor(Math.random() * maxWidth);
};
const instantiateEgg = () => {
    // 1 - create a copy from the egg in random position
    let eggObject = document.createElement("img");
    eggObject.src = "images/egg.png";
    eggObject.classList.add("egg");
    eggObject.style.left = `${getRandomPosition()}px`;
    return eggObject;
}

const animateEggToBottom = (imageObject, basketObject) => {
    let top = 0;

    let id = setInterval(() => {
        top += EGG_FALL_SPEED;

        if (top < window.innerHeight - imageObject.height) {
            imageObject.style.top = top + "px";

            // Check for collision with the basket
            if (checkCollision(imageObject, basketObject)) {
                // Egg hit the basket
                clearInterval(id);
                imageObject.remove();
                handleBasketCollision();
                instantiateEgg();
            }
        } else {
            // Egg hit the ground
            clearInterval(id);
            handleGroundCollision(imageObject);
            instantiateEgg();
        }
    }, EGG_ANIMATION_INTERVAL);
}
// check if the bounding boxes
// of the egg and the basket hit each other
const checkCollision = (eggObject, basketObject) => {

    const eggRect = eggObject.getBoundingClientRect();
    const basketRect = basketObject.getBoundingClientRect();

    // Check for collision
    return (
        eggRect.left < basketRect.right &&
        eggRect.right > basketRect.left &&
        eggRect.top < basketRect.bottom &&
        eggRect.bottom > basketRect.top
    );
}

const handleBasketCollision = () => {
    incrementScore();
    console.log(score);
}

const handleGroundCollision = (imageObject) => {
    imageObject.src = "images/broken.png";
    setTimeout(function () {
        imageObject.remove();
    },EGG_REMOVE_TIMEOUT);
}
// update score text
const updateScore = (textObject) => {
    textObject.textContent = `Score: ${score}`;
}
const incrementScore = () => {
    score++;
}
const spawnEgg  = (parentObject,basketObject) => {
    let eggObject = instantiateEgg();
    parentObject.appendChild(eggObject);
    animateEggToBottom(eggObject, basketObject);
};
function basketController(basketObject) {
    let leftOffset = 50;
    document.onkeydown = function (event) {
        switch (event.key) {
            case "ArrowLeft":
                if (basketObject.x >= 50) {
                    leftOffset -= 1;
                }
                break;
            case "ArrowRight":
                if (basketObject.x <= window.innerWidth + basketObject.width) {
                    leftOffset += 1;
                }
                break;
        }
        basketObject.style.left = `${leftOffset}vw`;
    };
}
