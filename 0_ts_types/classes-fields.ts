class VehicleField {
  // constructor(public colorConstructor: string = 'blue') {}
  constructor(public colorConstructor: string ) {}

  color: string = 'red';

  private honk(): void {
    console.log('beep');
  }
  protected honkProtected(): void {
    console.log('beep - protected');
  }
}

class CarField extends VehicleField {
  constructor(public wheel: number, color: string) {
    super(color);
    this.color = 'yellow';
  }

  private drive(): void {
    console.log(`vroom - drive is private and i have ${this.wheel} wheels`);
  }

  startDriveProcess(): void {
    this.drive();
    this.honkProtected();
  }
}

console.log(
  '\r\n------------------ Car (class) with modifier ------------------'
);
const carField = new CarField(4, 'purple');
carField.startDriveProcess();
console.log(`color of the vehicle: ${carField.color}`); // Accessing public field
console.log(`color of the vehicle (constructor): ${carField.colorConstructor}`); // Accessing public field

