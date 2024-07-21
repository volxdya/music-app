import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {AuthorService} from "./author.service";
import {CreateUserDto} from "../user/dto/createUserDto";

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @Post(`/create`)
    create(@Body() dto: CreateUserDto) {
        return this.authorService.create(dto);
    }

    @Get(`/get_all`)
    getAll() {
        return this.authorService.getAll();
    }

    @Get(`/get_one/:login`)
    getOne(@Param('login') login: string) {
        return this.authorService.getOne(login);
    }
}
