import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/createUserDto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get(`/get_all`)
    getAll() {
        return this.userService.getAll();
    }

    @Post(`/create`)
    create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }

    @Get(`/get_one/:login`)
    getOne(@Param('login') login: string) {
        return this.userService.getOne(login);
    }
}
