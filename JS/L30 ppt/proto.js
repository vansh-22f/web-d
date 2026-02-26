// Constructor
function Car(brand, speed) {
  this.brand = brand;
  this.speed = speed;
}
// Prototype method
Car.prototype.drive = function () {
  console.log(
    this.brand+" is driving at"+this.speed+" km/h"
);
};
// Create objects
const car1 = new Car("BMW", 120);
const car2 = new Car("Audi", 140);
// Method calls
car1.drive();//BMW is driving at 120 km/h
car2.drive();
