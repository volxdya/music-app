import { ApiProperty } from '@nestjs/swagger';

export class UsePlaylistDto {
  @ApiProperty({ example: '1', description: 'ID плейлиста' })
  readonly playlistId: number;

  @ApiProperty({ example: '1', description: 'ID трека' })
  readonly trackId: number;
}
