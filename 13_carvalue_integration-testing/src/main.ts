import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApp } from './setup-app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupApp(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => console.log('Server is running on http://localhost:3000'))
  .catch((err) => console.error('Error starting server:', err));
