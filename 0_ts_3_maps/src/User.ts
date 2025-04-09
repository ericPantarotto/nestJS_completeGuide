import { faker } from '@faker-js/faker';
import { MappableItems } from './MappableItems';

export class User extends MappableItems {
  name: string;

  constructor() {
    super();
    this.name = faker.person.firstName('female');
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
