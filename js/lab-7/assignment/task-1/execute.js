window.addEventListener("load", initializeGame);

function initializeGame() {
    let bodyObject = document.querySelector("body");
    let scoreTextObject = document.createElement("h5");
    let eggPlaceHolder = document.querySelector(".eggPlaceHolder");
    let basket = document.querySelector(".basket");

    // Set interval to create and animate eggs every second (adjust the interval as needed)
    setInterval(function () {
        spawnEgg(eggPlaceHolder, basket);
        /// score updated each [EGG_SPAWN_INTERVAL]
        updateScore(scoreTextObject);
    }, EGG_SPAWN_INTERVAL);

    basketController(basket);

    bodyObject.appendChild(scoreTextObject);
    scoreTextObject.classList.add("h5");
}