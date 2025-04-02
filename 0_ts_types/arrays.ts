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

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-11');
console.log(importantDates);
//NOTE: This is an array that can contain both Date objects and strings.
//NOTE: The type (Date | string)[] means that each element in the array can be either a Date object or a string.
//NOTE: This is useful when you want to allow multiple types of values in the same array.
//NOTE: The importantDates array is initialized with a Date object and a string.
