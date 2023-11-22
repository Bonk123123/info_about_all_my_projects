import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5005;
  const app = await NestFactory.create(AppModule);
  console.log('server started on port:', PORT);
  app.enableCors();
  await app.listen(PORT);
}
bootstrap();
