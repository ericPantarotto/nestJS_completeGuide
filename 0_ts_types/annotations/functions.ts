const add = (a: number, b: number): number => {
  return a + b;
};

add(5, 10); // 15

const addTypeInferred = (a: number, b: number) => {
  return a + b;
};

addTypeInferred(5, 10); // 15

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

console.log(subtract(10, 5)); // 5
console.log(divide(10, 5)); // 2
console.log(multiply(10, 5)); // 50

// Function with no return value
// void

const logger = (message: string): void => {
  console.log(message);
  // return 'an error'; // ERROR: Type 'string' is not assignable to type 'void'
};
logger('Hello, world!'); // Hello, world!

const throwErrorNever = (message: string): never => {
  throw new Error(message);
};

const throwErrorString = (message: string): string => {
  if (!message) throw new Error(message);

  return message;
};

const throwErrorVoid = (message: string): void => {
  if (!message) throw new Error(message);
};

throwErrorNever('Something went wrong!'); // Uncaught Error: Something went wrong!
throwErrorString('hello');
throwErrorVoid('hello'); // undefined
