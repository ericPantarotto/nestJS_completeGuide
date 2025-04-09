import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap()
  .then(() => console.log('Server is running on http://localhost:3000'))
  .catch((err) => console.error('Error starting server:', err));
// This code creates a simple NestJS application with a single controller that responds to GET requests at the root route.
// It uses the NestFactory to create the application and starts listening on port 3000.
// The server logs a message indicating that it is running and ready to accept requests.
// The code is structured using decorators to define the controller and module, following the NestJS framework conventions.
