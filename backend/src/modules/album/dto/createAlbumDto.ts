import { ApiProperty } from "@nestjs/swagger";

export class CreateAlbumDto {
  @ApiProperty({
    description: 'Название альбома',
    example: 'SUPER GOOD ALBUM 2k24',
  })
  readonly title: string;

  @ApiProperty({
    description: 'Аватарка альбома',
    example: 'http://hostimg/album/imgaes/id=imagesupergoodalbum2024',
  })
  readonly avatarUrl: string;

  @ApiProperty({
    description: 'ID Автора, владелец альбома',
    example: '1',
  })
  readonly userId: number;
}
