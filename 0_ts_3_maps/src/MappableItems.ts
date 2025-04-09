import { faker } from '@faker-js/faker';

export class MappableItems {
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}
