const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// TS Destructuring

// const age = profile.age; //NOTE: simple destructuring
// @ts-expect-error: due to project structure, this will throw an error
const { age, name }: { age: number; name: string } = profile;

const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;

console.log(age, name);
console.log(lat, lng);
