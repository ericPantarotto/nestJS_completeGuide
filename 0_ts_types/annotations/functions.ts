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

