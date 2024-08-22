import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../modules/user/user.model';
import { Request } from 'express';
import { guardToken } from '../utils/guardToken';

@Injectable()
export class IsAuthorGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const req: Request = context.switchToHttp().getRequest();
      const user = this.jwtService.verify(guardToken(req));

      if (!user.isUser) {
        return true;
      }
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    } catch (err) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
