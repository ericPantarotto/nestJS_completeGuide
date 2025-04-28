import { ValidationPipe } from '@nestjs/common';
import cookieSession from 'cookie-session';

import { INestApplication } from '@nestjs/common';

export const setupApp = (app: INestApplication) => {
  app.use(cookieSession({ keys: ['randomCookieString'] }));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
};
