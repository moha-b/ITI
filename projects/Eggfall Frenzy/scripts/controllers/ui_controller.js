class UiController {
    static #instance = null;
    #textObject = document.querySelector(".scoreText");
    #score = 0;

    constructor() {
        if (UiController.#instance !== null) {
            throw new Error("Cannot instantiate more than one UiController instance.");
        }
        UiController.#instance = this;

        this.updateScoreUI();
    }

    static getInstance() {
        if (UiController.#instance === null) {
            UiController.#instance = new UiController();
        }
        return UiController.#instance;
    }

    get score() {
        return this.#score;
    }

    set score(value) {
        this.#score = value;
        this.updateScoreUI();
    }

    updateScoreUI() {
        this.#textObject.textContent = `Score: ${this.#score}`;
    }

    addToScore(points) {
        this.score += points;
    }

    subtractFromScore(points) {
        this.score -= points;
    }

    resetScore() {
        this.score = 0;
    }

    showScoreOnScreen(){
        this.#textObject.textContent = `Score : ${this.score}`;
    }
}