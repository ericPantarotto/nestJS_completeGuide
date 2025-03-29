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

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
logNumber(5); // 5


// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); //ERROR: 'any' type
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};
