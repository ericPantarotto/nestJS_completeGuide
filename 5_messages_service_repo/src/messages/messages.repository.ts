import { readFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string): Promise<object> {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents) as { [key: string]: object };

    return messages[id];
  }

  async findAll() {}

  // async create(message: string) {}
}
