import { faker } from '@faker-js/faker';
import { MappableItems } from './MappableItems';

export class Company extends MappableItems {
  companyName: string;
  catchPhrase: string;

  constructor() {
    super();
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
  }
}
