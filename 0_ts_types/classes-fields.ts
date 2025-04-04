class VehicleField {
  constructor(public colorConstructor: string = 'blue') {}

  color: string = 'red';

  private honk(): void {
    console.log('beep');
  }
  protected honkProtected(): void {
    console.log('beep - protected');
  }
}

class CarField extends VehicleField {
  private drive(): void {
    console.log('vroom - drive is private');
  }

  startDriveProcess(): void {
    this.drive();
    this.honkProtected();
  }
}

console.log(
  '\r\n------------------ Car (class) with modifier ------------------'
);
const carField = new CarField();
carField.startDriveProcess();
console.log(`color of the vehicle: ${carField.color}`); // Accessing public field
console.log(`color of the vehicle (constructor): ${carField.colorConstructor}`); // Accessing public field
