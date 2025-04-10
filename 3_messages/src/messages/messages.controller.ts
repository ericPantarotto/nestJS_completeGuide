import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { id: 1, text: 'Hello NestJS 1' },
      { id: 2, text: 'Hello NestJS 2' },
    ];
  }

  @Post()
  createMessage() {
    return { message: 'Message created' };
  }

  @Get(':id')
  getMessage() {
    return { id: 1, text: 'Hello World NestJS1, requested from id #1' };
  }
}
