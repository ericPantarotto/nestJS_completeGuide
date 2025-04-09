import { faker } from '@faker-js/faker';
import { MappableItems } from './MappableItems';
import { Mappable } from './CustomMap';

export class User extends MappableItems implements Mappable {
  name: string;

  constructor() {
    super();
    this.name = faker.person.firstName('female');
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
