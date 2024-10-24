import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { envsValue } from './config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main')
  await app.listen(envsValue.PORT);
  logger.log(`App listening on Port ${envsValue.PORT}`);
}
bootstrap();
