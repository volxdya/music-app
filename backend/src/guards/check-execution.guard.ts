import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { guardToken } from '../utils/guardToken';
import { AlbumService } from '../modules/album/album.service';
import { Album } from '../modules/album/album.model';

@Injectable()
export class CheckExecutionGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private albumService: AlbumService,
  ) {}

  async canActivate(context: ExecutionContext) {
    try {
      const req = context.switchToHttp().getRequest();
      const user = this.jwtService.verify(guardToken(req));

      const album: Album = await this.albumService.getById(
          req.params.albumId,
      );

      if (album.userId === user.id) {
        return true;
      }

      return true;
    } catch (err) {
      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
