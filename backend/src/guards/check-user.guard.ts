import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { guardToken } from '../utils/guardToken';

@Injectable()
export class CheckUserGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const req = context.switchToHttp().getRequest();
      const user = this.jwtService.verify(guardToken(req));

      if (user.id === req.body.userId) {
        return true;
      }

      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    } catch (err) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
