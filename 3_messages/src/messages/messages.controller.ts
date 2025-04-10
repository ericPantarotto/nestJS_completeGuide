import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { id: 1, text: 'Hello World' },
      { id: 2, text: 'Hello NestJS' },
    ];
  }

  @Post()
  createMessage() {
    return { message: 'Message created' };
  }

  @Get(':id')
  getMessage() {
    return { id: 1, text: 'Hello World' };
  }
}
