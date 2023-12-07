class GameManager {
    #basket = new Basket();
    #spawnController = new SpawnController();

    constructor() {
        UiController.getInstance().showScoreOnScreen();
        GameObject.setBasket(this.#basket);
        this.spawning();
        this.basketControllers(this.#basket);
        // 5 - buff & nerf
    }

    spawning() {
        this.#spawnController.Spawning(() => new Egg());
        this.#spawnController.Spawning(() => new GoldenEgg(), getRandomInterval());
        this.#spawnController.Spawning(() => new BlackEgg(), getRandomInterval());
    }

    // TODO: try to make it implicate
    basketControllers(basketObject){
        // Handle keyboard events to move the basketObject
        document.addEventListener("keydown", function (event) {
            if (event.key === "ArrowLeft") basketObject.moveLeft();
            else if (event.key === "ArrowRight") basketObject.moveRight();
        });
    }

}