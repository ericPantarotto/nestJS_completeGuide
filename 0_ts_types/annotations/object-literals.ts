// Array
const colors: string[] = ['red', 'green', 'blue'];
const myNumbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, true, false];

console.log(colors); // ['red', 'green', 'blue']
console.log(myNumbers); // [1, 2, 3]
console.log(truths); // [true, true, false]

// Classes
class Car {}
const car: Car = new Car();
console.log(car); // Car {}

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
  // y: 'string' // ERROR
};

console.log(point.x); // 10
console.log(point.y); // 20
