import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // ERROR: DON'T DO THIS IN NEST WITH REAL APP - USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    // return [
    //   { id: 1, text: 'Hello NestJS 1' },
    //   { id: 2, text: 'Hello NestJS 2' },
    // ];

    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    // console.log(body);
    // return { message: 'Message created' };

    return this.messagesService.create(body.content);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    // console.log(id);
    // return { id: 1, text: 'Hello World NestJS1, requested from id #1' };

    return this.messagesService.findOne(id);
  }
}
