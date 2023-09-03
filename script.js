const object = { test: 1 };
const number = new Number(3);
const string = "abc";

// console.log(object.__proto__);
// console.log(number.__proto__.__proto__);
// console.log(string.__proto__);

const user1 = {
  username: "asdasd",
  id: 1,
  email: "asdasdsa",
};

//...

const user1000 = {
  username: "asdasd",
  id: 1000,
  email: "asdasdsa",
  test() {
    console.log(this);
  },
};

class Vehicle {
  speed = 0;
  wheels = 0;
  fuel = "diesel";
  #type = "";

  static isLandVehicle(vehicleType) {
    switch (vehicleType) {
      case "ship":
      case "plane":
      case "":
        return false;

      default:
        return true;
    }
  }

  constructor({ speed, wheels, fuel, type }) {
    this.speed = speed; //car.speed
    this.wheels = wheels; //car.wheels
    this.fuel = fuel; //car.fuel
    this.#type = type; //car.type
  }

  checkThis = () => {
    console.log(this);
  };

  getVehicleInfo = function () {
    console.log(
      `speed: ${this.speed}, fuel: ${this.fuel}, wheels: ${this.wheels}`
    );
  };

  get type() {
    return `Vehicle type: ${this.#type}`;
  }

  set type(vehicleType) {
    switch (vehicleType) {
      case "car":
      case "ship":
      case "plane":
      case "submarine":
        this.#type = vehicleType;
        break;
      default:
    }
  }
}

class Car extends Vehicle {
  numberOfSeats = 4;
  constructor({ wheels, fuel, speed, numberOfSeats }) {
    super({ wheels, fuel, speed, type: "car" });

    if (numberOfSeats) {
      this.numberOfSeats = numberOfSeats;
    }
    this.test = "";
  }

  // getVehicleInfo = function () {
  //   console.log(
  //     `THIS IS FROM CAR CLASS!!!
  //     speed: ${this.speed}, fuel: ${this.fuel}, wheels: ${this.wheels}`
  //   );
  // };
}

const car = new Car({ wheels: 4, fuel: "diesel", speed: 80 });

car.getVehicleInfo();
