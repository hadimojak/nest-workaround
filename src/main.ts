import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  console.log(process.env.PORT);
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  await app.listen(Number(process.env.PORT));
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
