class Vehicle {
  drive(): void {
    console.log('this is a car');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
