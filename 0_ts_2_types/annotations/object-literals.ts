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

// 2) When we declare a variable on one line and initialize it later
const words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  foundWord = false;
  if (words[i] === 'green') {
    foundWord = true;
  }
  console.log(foundWord); // true
}

// 3) Variable whose type cannot be inferred correctly
const numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
  console.log(numberAboveZero); // 12
}