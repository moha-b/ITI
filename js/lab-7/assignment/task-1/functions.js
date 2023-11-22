const getRandomPosition = () => {
    return Math.floor((Math.random() * window.innerWidth) - 1);
};
const instantiateEgg = (parentObject,basketObject) => {
    // egg object
    let eggObject = document.createElement("img");
    eggObject.src = "images/egg.png";
    eggObject.classList.add("egg");
    eggObject.style.left = `${getRandomPosition()}px`;
    // add to the parent
    parentObject.appendChild(eggObject);
    // animate and delete and create
    animateEggToBottom(eggObject, parentObject, basketObject);
}

const animateEggToBottom = (imageObject, parentObject, basketObject) => {
    let top = 0;

    let id = setInterval(() => {
        top += 8;

        if (top < window.innerHeight - imageObject.height) {
            imageObject.style.top = top + "px";

            // Check for collision with the basket
            if (checkCollision(imageObject, basketObject)) {
                // Egg hit the basket
                clearInterval(id);
                parentObject.removeChild(imageObject);
                handleBasketCollision();
                instantiateEgg(parentObject, basketObject);
            }
        } else {
            // Egg hit the ground
            clearInterval(id);
            handleGroundCollision(imageObject);
            setTimeout(function () {
                parentObject.removeChild(imageObject);
            },2000);
            instantiateEgg(parentObject, basketObject);
        }
    }, 50);
}

const checkCollision = (eggObject, basketObject) => {
    // Get the bounding boxes of the egg and the basket
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
}

const incrementScore = (score) => {
  return score++;
}