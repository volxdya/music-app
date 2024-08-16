import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../user/dto/createUserDto';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({
    summary: 'JWT-Authentication',
    description: 'Авторизация пользователя',
  })
  @Post(`login`)
  login(@Body() dto: CreateUserDto) {
    return this.authService.login(dto);
  }
}
