import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateUser {
  @IsString()
  @IsNotEmpty()
  @Length(3, 16, {
    message: 'Минимум 3 символа, максимум - 16',
  })
  readonly login: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 16, {
    message: 'Минимум 3 символа, максимум - 16',
  })
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 16, {
    message: 'Минимум 3 символа, максимум - 16',
  })
  readonly lastName: string;
}
