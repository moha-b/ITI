export class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    toString() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
}