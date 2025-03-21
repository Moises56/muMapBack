import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS
  app.enableCors({
    origin: 'http://localhost:4200', // Allow requests from Angular frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // If you need to send cookies or auth headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
