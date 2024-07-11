import {DocumentBuilder} from "@nestjs/swagger";

export const SWAGGER_CONFIG = new DocumentBuilder()
    .setTitle('template nestjs application')
    .setDescription('The template API description')
    .setVersion('1.0')
    .addTag('template')
    .build();