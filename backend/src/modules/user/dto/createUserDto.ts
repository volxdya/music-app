import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'user', description: 'Логин пользователя' })
  readonly login: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Владислав', description: 'Имя пользователя' })
  readonly firstName: string;

  @ApiProperty({ example: 'Тестов', description: 'Фамилия пользователя' })
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @Length(8, 32, {
    message: 'Некорретная длина пароля',
  })
  @ApiProperty({ example: 'qwerty123zxc', description: 'Пароль пользователя' })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'true', description: 'Автор пользователь или нет?' })
  readonly isUser: boolean;
}
