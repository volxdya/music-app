import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { BROKER_CONFIG } from './config/broker.config';
import { SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from './config/swagger.config';
import { HttpExceptionFilter } from './filters/http-exeption';

declare const module: any;

async function bootstrap() {
  const PORT = process.env.PORT || 8080;

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.connectMicroservice<MicroserviceOptions>(BROKER_CONFIG);

  // app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, SWAGGER_CONFIG);
  SwaggerModule.setup('/api/docs', app, document);

  app.startAllMicroservices();

  await app.listen(PORT, () => {
    console.log(`microservice -> http://localhost:${PORT}`);
    console.log(`documentation api -> http://localhost:${PORT}/api/docs`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
