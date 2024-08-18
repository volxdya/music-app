import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Получение массива всех пользователей' })
  @Get(`/get_all`)
  getAll() {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Получение массива всех авторов' })
  @Get(`/get_authors`)
  getAuthors() {
    return this.userService.getAllAuthors();
  }

  @ApiOperation({ summary: 'Создание юзера' })
  @Post(`/create`)
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @ApiOperation({ summary: 'Получние одного пользователя по логину' })
  @Get(`/get_one/:login`)
  getOne(@Param('login') login: string) {
    return this.userService.getOne(login);
  }

  @ApiOperation({ summary: 'Получние одного пользователя по ID' })
  @Get(`/get_by_id/:userId`)
  getById(@Param('userId') userId: number) {
    return this.userService.getById(userId);
  }

  @ApiOperation({
    summary: 'Получение похожих исполнителей, отталкиваясь от одного автора',
  })
  @Get(`/get_similar_authors/:userId`)
  getSimilarAuthors(@Param('userId') userId: number) {
    return this.userService.getSimilarAuthors(userId);
  }

  @ApiOperation({ summary: 'Покупка подписки' })
  @Post(`/buy_subscription`)
  buySubscription(@Body() userId: number) {
    return this.userService.buySubscription(userId);
  }
}
