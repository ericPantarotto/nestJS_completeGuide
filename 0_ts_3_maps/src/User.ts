import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: { lat: number; lng: number };

  constructor(name: string, lat: number, lng: number) {
    this.name = name;
    this.location = { lat, lng };
  }
}
