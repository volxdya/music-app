import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {MicroserviceOptions} from "@nestjs/microservices";
import {BROKER_CONFIG} from "./broker.config";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 8080;

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(BROKER_CONFIG);

  const config = new DocumentBuilder()
      .setTitle('template nestjs application')
      .setDescription('The template API description')
      .setVersion('1.0')
      .addTag('template')
      .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  await app.startAllMicroservices();

  await app.listen(PORT, () => {
    console.log(`microservice -> http://localhost:${PORT}`);
    console.log(`documentation api -> http://localhost:${PORT}/api/docs`);
  });
}

bootstrap();
