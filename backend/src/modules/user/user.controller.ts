import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUserDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';
import { UpdateUser } from './dto/updateUser';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

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
  @Post(`/buy_subscription/:userId/:subscriptionId`)
  @UseGuards(AuthGuard)
  buySubscription(
    @Param('userId') userId: number,
    @Param('subscriptionId') subscriptionId: number,
  ) {
    return this.userService.buySubscription(userId, subscriptionId);
  }

  @ApiOperation({ summary: 'Отмена подписки' })
  @Post(`/delete_subscription/userId=:userId`)
  @UseGuards(AuthGuard)
  deleteSubscription(@Param('userId') userId: number) {
    return this.userService.deleteSubscription(userId);
  }

  @ApiOperation({ summary: 'Обновление данных юзера' })
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  @Patch(`/update/:userId`)
  update(@Body() fields: UpdateUser, @Param('userId') userId: number) {
    return this.userService.update(fields, userId);
  }

  @UseGuards(AuthGuard)
  @Get(`/check/:userId`)
  check(@Param('userId') userId: number) {
    return this.userService.check(userId);
  }
}
