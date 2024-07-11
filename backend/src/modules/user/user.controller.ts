import {Body, Controller, Get, Post} from '@nestjs/common';
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
}
