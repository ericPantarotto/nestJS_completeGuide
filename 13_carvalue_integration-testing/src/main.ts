import { NestFactory } from '@nestjs/core';
import cookieSession from 'cookie-session';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieSession({ keys: ['randomCookieString'] }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => console.log('Server is running on http://localhost:3000'))
  .catch((err) => console.error('Error starting server:', err));
