import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreatePlaylistDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNumber()
    @IsNotEmpty()
    readonly userId: number;

    /*
        Три последних поля без декоратора, потому что у них имеется дефолтное значение при создании.
     */
    readonly likes: number;
    readonly avatarUrl: string;
    readonly description: string;
}