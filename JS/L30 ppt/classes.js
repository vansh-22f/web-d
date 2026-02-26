// Class syntax
class Car {
  // Constructor
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  // Drive method
  drive() {
    console.log(
        this.brand +" is driving at" +this.speed+" km/h"
    );
  }
}
// Create objects
const car1 = new Car("BMW", 120);
const car2 = new Car("Audi", 140);
// Call methods
car1.drive();//BMW is driving at 120 km/h
car2.drive();

// Inheritance
class ElectricCar extends Car {
  // Charge method
  charge() {
    console.log(this.brand + " is charging");
  }
}
// Create object
const tesla = new ElectricCar("Tesla", 150);

// Call methods
tesla.drive();//Tesla is driving at 150 km/h
tesla.charge();//Tesla is charging
