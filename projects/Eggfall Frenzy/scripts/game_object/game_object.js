const GameObjectType = {
    NORMAL: 'normal',
    GOLDEN: 'golden',
    BLACK: 'black',
};

class GameObject {
    static #basket;
    #object = document.createElement("img");
    #bodyObject = document.body;
    #currentPosition = 0;
    #animationInterval = null;
    #type;

    static setBasket(basket) {
        this.#basket = basket;
    }

    constructor(imageSrc,type) {
        this.assignGameObjectToBody(imageSrc);
        this.#type = type;
        this.startAnimation();
    }

    assignGameObjectToBody(imageSrc){
        this.initializeGameObject(imageSrc);
        this.#bodyObject.appendChild(this.#object);
    }
    initializeGameObject(imageSrc){
        this.#object.src = imageSrc;
        this.#object.classList.add("egg");
        this.#object.style.left = `${getRandomPosition()}px`;
    }

    setImage(image) {
        this.#object.src = image;
    }

    getObject() {
        return this.#object;
    }

    startAnimation() {
        this.#animationInterval = setInterval(() => this.fall(), EGG_ANIMATION_INTERVAL);
    }

    fall() {
        this.updatePosition();
        if (this.#currentPosition >= SCREEN_HEIGHT - this.#object.style.height - 70) this.destroy()
        else GameObject.#basket.checkCollision(this)
    }

    updatePosition() {
        this.#currentPosition += EGG_FALL_SPEED;
        this.#object.style.top = `${this.#currentPosition}px`;
    }

    stopAnimation() {
        clearInterval(this.#animationInterval);
    }

    onCollision() {
        switch (this.#type) {
            case GameObjectType.NORMAL:
                this.#object.remove();
                UiController.getInstance().addToScore(1);
                break;
            case GameObjectType.GOLDEN:
                this.#object.remove();
                UiController.getInstance().addToScore(5);
                break;
            case GameObjectType.BLACK:
                this.#object.remove();
                UiController.getInstance().subtractFromScore(10);
                break;
            default:
                console.log('Unknown Egg Type collided with the basket!');
        }
    }

    destroy() {
        this.stopAnimation();
        this.setImage(BROKEN_EGG_IMAGE);
        setTimeout(() => this.#object.remove(), EGG_DESTROY_TIMEOUT);
    }
}