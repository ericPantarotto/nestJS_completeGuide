class VehicleClass {
  drive(): void {
    console.log('this is a car');
  }

  honk(): void {
    console.log('beep');
  }
}

console.log('------------------ Vehicle(class) ------------------');
const vehicle = new VehicleClass();
vehicle.drive();
vehicle.honk();

class Car extends VehicleClass {
  drive(): void {
    console.log('vroom');
  }
}

console.log('\r\n------------------ Car (class) ------------------');
const car = new Car();
car.drive();
car.honk();
