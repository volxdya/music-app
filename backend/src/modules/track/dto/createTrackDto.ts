import { ApiProperty } from "@nestjs/swagger";

export class CreateTrackDto {
  @ApiProperty({ example: 'Good Track', description: 'Название трека' })
  readonly title: string;

  @ApiProperty({ example: 'http://imageshost/trackId=123', description: 'Ссылка на картинку трека' })
  readonly avatarUrl: string;

  @ApiProperty({ example: 'http://mp3host/trackId=123', description: 'Ссылка на MP3 файл трека' })
  readonly trackUrl: string;

  @ApiProperty({ example: '1', description: 'ID автора трека' })
  readonly authorId: number;

  @ApiProperty({ example: 'true', description: 'Трек или нет, это для того, чтобы при создании чистого трека создавался к нему альбом' })
  readonly isTrack: boolean;

  @ApiProperty({ example: '123456', description: 'Количество прослушиваний трека' })
  readonly auditions: number;
}
