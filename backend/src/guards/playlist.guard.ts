import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { guardToken } from '../utils/guardToken';
import { User } from '../modules/user/user.model';

@Injectable()
export class PlaylistGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const req = context.switchToHttp().getRequest();
      const user: User = this.jwtService.verify(guardToken(req));

      if (
        user.playlists[0].id === req.body.playlistId ||
        user.playlists[0].id === req.param.playlistId
      ) {
        return true;
      }
      throw new HttpException('Не ваш плейлист', HttpStatus.FORBIDDEN);
    } catch (err) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
