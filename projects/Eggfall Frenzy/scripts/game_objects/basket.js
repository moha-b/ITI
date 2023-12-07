class Basket {
    #basketObject = document.querySelector(".basket");
    currentPosition = 0;
    constructor() {
        // TODO: look at the (todo) at game manager
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") this.moveLeft();
            else if (event.key === "ArrowRight") this.moveRight();
        });
    }

    getObject(){
        return this.#basketObject;
    }

    moveLeft() {
        this.currentPosition = parseInt(this.#basketObject.style.left) || 0;
        if (this.currentPosition > 0) this.currentPosition -= BASKET_SPEED;
        this.updatePosition(this.currentPosition);
    }

    moveRight() {
        let currentPosition = parseInt(this.#basketObject.style.left) || 0;
        if(currentPosition < SCREEN_WIDTH - this.#basketObject.style.width - 110) currentPosition += BASKET_SPEED;
        this.updatePosition(currentPosition);
    }

    updatePosition(currentPosition){
        this.#basketObject.style.left = `${currentPosition}px`;
    }

    checkCollision(gameObject) {
        const basketBoundaries = this.#basketObject.getBoundingClientRect();
        const objectBoundaries = gameObject.getObject().getBoundingClientRect();

        // Check for intersection of boundaries
        if (
            objectBoundaries.bottom > basketBoundaries.top &&
            objectBoundaries.left < basketBoundaries.right &&
            objectBoundaries.right > basketBoundaries.left
        ) {
            // Collision detected, destroy the gameObject
            gameObject.onCollision();
        }
    }
}