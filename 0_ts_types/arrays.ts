const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

console.log(carMakers);
console.log(dates);
console.log(carsByMake);


// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop(); //NOTE: pop() returns the last element of the array; an instance of string
console.log(car);
console.log(myCar);

// Prevent incompatible values
// carMakers.push(100);
//ERROR: Argument of type 'number' is not assignable to parameter of type 'string'.
//NOTE: This is because we have defined carMakers as an array of strings, so it cannot accept numbers.

// Help with 'map'
const newCars = carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);
console.log(newCars);
