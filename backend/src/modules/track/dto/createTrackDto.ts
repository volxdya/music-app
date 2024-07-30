export class CreateTrackDto {
  readonly title: string;
  readonly avatarUrl: string;
  readonly trackUrl: string;
  readonly authorId: number;
  readonly isTrack: boolean;
  readonly auditions: number;
}
