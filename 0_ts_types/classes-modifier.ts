class VehicleModifier {
  private honk(): void {
    console.log('beep');
  }
  protected honkProtected(): void {
    console.log('beep - protected');
  }
}


class CarModifier extends VehicleModifier {
  private drive(): void {
    console.log('vroom - drive is private');
  }

  startDriveProcess(): void {
    this.drive();
    this.honkProtected();
    

  }
}


console.log('\r\n------------------ Car (class) with modifier ------------------');
const carModifier = new CarModifier();
carModifier.startDriveProcess();

// NOTE: this.honk(); // Error: Property 'honk' is private and only accessible within class 'VehicleModifier'.
// carModifier.honk();
