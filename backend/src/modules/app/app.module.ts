import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import {DB_CONFIG} from "./db.config";

@Module({
  imports: [
      ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      SequelizeModule.forRoot(DB_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
