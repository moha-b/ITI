let score = 0;
window.addEventListener("load", function () {
    let bodyObject = document.querySelector("body");
    let scoreTextObject = document.createElement("h5");
    let eggPlaceHolder = document.querySelector(".eggPlaceHolder");
    let basket = document.querySelector(".basket");
    // 1 - create many copies from the egg
    // 2 - instantiate egg in different position
    // 3 - animate egg to bottom
    // if it !(bottom) animate to the bottom
    // else remove the element form the div and repeat the cycle
    instantiateEgg(eggPlaceHolder,basket)
    // 4 - move the basket
    let leftOffset = 50;
    document.onkeydown = function (event) {
        switch (event.key){
            case "ArrowLeft":
                if(basket.x >= 50){
                    leftOffset -= 1;
                }
                break;
            case "ArrowRight":
                if (basket.x <= window.innerWidth+ basket.width) {
                    leftOffset += 1;
                }
                break;
        }
        basket.style.left = `${leftOffset}vw`;
    };
    // 5 - calculate score
    scoreTextObject.classList.add("h5");
    scoreTextObject.textContent = `Score : ${incrementScore(score)}`;
    bodyObject.appendChild(scoreTextObject);
});