import { faker } from '@faker-js/faker';
import { MappableItems } from './MappableItems';
import { Mappable } from './CustomMap';

export class Company extends MappableItems implements Mappable {
  companyName: string;
  catchPhrase: string;

  constructor() {
    super();
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
