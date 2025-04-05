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

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
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

// const printVehicleReportable = (vehicle: Reportable): void => {
//   console.log(`Summary: ${vehicle.summary()}`);
// };
const printSummary = (item: Reportable): void => {
  console.log(`Summary: ${item.summary()}`);
};

console.log('------------------ Vehicle interface ------------------');
printVehicle(oldCivic);
console.log('\r\n------------------ Reportable interface ------------------');
printSummary(oldCivic);
console.log(
  '\r\n------------------ Reportable interface - Drink ------------------'
);
printSummary(drink);