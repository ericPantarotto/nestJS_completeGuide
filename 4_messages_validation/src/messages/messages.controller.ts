import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  createMessage(@Body() body: { text: string }) {
    console.log(body);

    return { message: 'Message created' };
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    console.log(id);

    return { id: 1, text: 'Hello World NestJS1, requested from id #1' };
  }
}
