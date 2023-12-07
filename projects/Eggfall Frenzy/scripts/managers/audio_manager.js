class AudioManager {
    static #audioElements = {};

    static loadAudio(id, src) {
        this.#audioElements[id] = new Audio(src);
    }

    static playAudio(id) {
        const audio = this.#audioElements[id];
        if (audio) audio.play();
        else console.error(`Audio element with ID '${id}' not found!`);
    }

    static stopAudio(id) {
        const audio = this.#audioElements[id];
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        } else {
            console.error(`Audio element with ID '${id}' not found!`);
        }
    }
}