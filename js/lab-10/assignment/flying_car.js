import { Car } from "./car.js";

export class FlyingCar extends Car {
    constructor(model, year, canFly) {
        super(model, year);
        this.canFly = canFly;
    }

    toString() {
        const carData = super.toString();
        const flyStatus = this.canFly ? 'I can Fly' : 'I can’t fly';
        return `${carData}, ${flyStatus}`;
    }
}