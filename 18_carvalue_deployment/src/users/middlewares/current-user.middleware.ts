import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { RequestWithSession } from 'src/interfaces/request-middleware.interface';
import { SessionInterface } from 'src/interfaces/session.interface';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private readonly usersService: UsersService) {}
  async use(req: RequestWithSession, res: Response, next: NextFunction) {
    const { userId } = (req.session as SessionInterface) || {};

    if (userId) {
      const user = await this.usersService.findOne(userId);
      req.currentUser = user;
    }

    next();
  }
}
