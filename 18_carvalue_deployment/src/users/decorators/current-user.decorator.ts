import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { SessionInterface } from 'src/interfaces/session.interface';
import { User } from '../user.entity';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context
      .switchToHttp()
      .getRequest<{ session: SessionInterface; currentUser?: User }>();

    // console.log(request.session);
    return request.currentUser;
  },
);
