import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaylistDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Крутой плейлист', description: 'Название плейлиста' })
  readonly title: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ example: '1', description: 'ID автора плейлиста' })
  readonly userId: number;

  /*
        Три последних поля без декоратора, потому что у них имеется дефолтное значение при создании.
     */
  @ApiProperty({ example: '123456', description: 'Лайки плейлиста' })
  readonly likes: number;

  @ApiProperty({ example: 'http://imageshost/playlistId=123', description: 'Ссылка на аватарку плейлиста' })
  readonly avatarUrl: string;
  
  @ApiProperty({ example: 'Крутое описание', description: 'Описание плейлиста' })
  readonly description: string;
}
