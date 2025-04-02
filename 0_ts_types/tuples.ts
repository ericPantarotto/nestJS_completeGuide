// const drink = {
//   color: 'brown',
//   carbonated: true,
//   sugar: 40
// };

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: [string, boolean, number] = ['brown', false, 0];

console.log(pepsi);
console.log(sprite);
console.log(tea);

const carSpecsTuple: [number, number] = [400, 3354];
const carSpecsObject = {
  horsepower: 400,
  weight: 3354
};

console.log(carSpecsTuple);
console.log(carSpecsObject);
