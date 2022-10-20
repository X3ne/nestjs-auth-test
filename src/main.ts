import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configuration } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(configuration().port);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('app listening on port', configuration().port);
  }
}
bootstrap();
