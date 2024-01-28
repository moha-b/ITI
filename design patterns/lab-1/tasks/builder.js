class Vehicle {
    constructor() {
        this.parts = [];
    }

    addPart(part) {
        this.parts.push(part);
    }

    getDescription() {
        return `Vehicle with parts: ${this.parts.join(", ")}`;
    }
}

class VehicleBuilder {
    constructor() {
        this.vehicle = new Vehicle();
    }

    buildTrunk() {
        this.vehicle.addPart("Trunk");
        return this;
    }

    buildMotor() {
        this.vehicle.addPart("Motor");
        return this;
    }

    getResult() {
        return this.vehicle;
    }
}

class Shop {
    constructVehicle(builder) {
        return builder.buildTrunk().buildMotor().getResult();
    }
}

const vehicleBuilder = new VehicleBuilder();
const shop = new Shop();

const car = shop.constructVehicle(vehicleBuilder);
console.log(car.getDescription());