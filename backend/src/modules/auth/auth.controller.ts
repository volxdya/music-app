import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {ApiOperation} from "@nestjs/swagger";
import {CreateUserDto} from "../user/dto/createUserDto";

@Controller('/auth/')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiOperation({
        summary: 'JWT-Authentication',
        description: 'Авторизация пользователя (лог + пароль) через jwt-токены',
    })
    @Post(`/login`)
    login(@Body() dto: CreateUserDto) {
        return this.authService.login(dto);
    }
}