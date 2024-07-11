import {IsNotEmpty, IsString, Length} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly login: string;

    @IsString()
    @IsNotEmpty()
    readonly firstName: string;

    @IsString()
    @IsNotEmpty()
    readonly lastName: string;

    @Length(8, 32, {
        message: "Некорретная длина пароля"
    })
    @IsString()
    @IsNotEmpty()
    readonly password: string;
}