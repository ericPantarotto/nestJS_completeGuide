interface Vehicle {
  name: string;
  year: number;
  fullYear: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  fullYear: new Date(),
  summary(): string {
    return `Name: ${this.name} - Year: ${this.year} - Broken: ${this.broken}`;
  },
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Full Year: ${vehicle.fullYear}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`Summary: ${vehicle.summary()}`);
};

const printVehicleReportable = (vehicle: Reportable): void => {
  console.log(`Summary: ${vehicle.summary()}`);
};

console.log('------------------ Vehicle interface ------------------');
printVehicle(oldCivic);
console.log('------------------ Reportable interface ------------------');

printVehicleReportable(oldCivic);