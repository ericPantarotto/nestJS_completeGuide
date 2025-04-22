/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}

  async intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session;
    if (userId) {
      const user = await this.usersService.findOne(userId);
      request.CurrentUser = user;
    }

    return handler.handle();
  }
}
