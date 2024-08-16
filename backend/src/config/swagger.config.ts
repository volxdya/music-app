import { DocumentBuilder } from '@nestjs/swagger';

export const SWAGGER_CONFIG = new DocumentBuilder()
  .setTitle('music application')
  .setDescription('Документация API Music app (клон YXDNEX MXS!C)')
  .setVersion('1.0')
  .addTag('Описание API')
  .build();
