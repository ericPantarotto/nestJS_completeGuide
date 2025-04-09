import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/home')
  getRootRoute(): string {
    return 'Hello NestJS!';
  }

  @Get('/bye')
  getBye(): string {
    return 'Bye Bye NestJS!';
  }
}
