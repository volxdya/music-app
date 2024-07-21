import { Module } from '@nestjs/common';
import {AuthorController} from "./author.controller";
import {AuthorService} from "./author.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Author} from "./author.model";
import {Track} from "../track/track.model";

@Module({
    imports: [SequelizeModule.forFeature([Author, Track])],
    controllers: [AuthorController],
    providers: [AuthorService],
    exports: [AuthorService]
})
export class AuthorModule {}
