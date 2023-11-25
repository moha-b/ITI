class SpawnController {
    constructor(intervalTime = DEFAULT_SPAWNING_TIME) {
        this.intervalTime = intervalTime;
        this.intervalId = null;
    }

    Spawning(spawn,intervalTime) {
        this.intervalId = setInterval(() => spawn(), intervalTime ?? this.intervalTime);
    }

    stopSpawning() {
        clearInterval(this.intervalId);
    }
}