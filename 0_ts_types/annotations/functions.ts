const add = (a: number, b: number): number => {
  return a + b;
};

add(5, 10); // 15

const addTypeInferred = (a: number, b: number) => {
  return a + b;
};

addTypeInferred(5, 10); // 15