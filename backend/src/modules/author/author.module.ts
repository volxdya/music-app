import { Module } from '@nestjs/common';
import {AuthorController} from "./author.controller";
import {AuthorService} from "./author.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Author} from "./author.model";

@Module({
    imports: [SequelizeModule.forFeature([Author])],
    controllers: [AuthorController],
    providers: [AuthorService],
})
export class AuthorModule {}
