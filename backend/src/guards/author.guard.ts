import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class IsAuthorGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    try {
      const req = context.switchToHttp().getRequest();

      const token = req.headers.authorization;
      const bearer: string = token.split(' ')[0];
      const ourToken: string = token.split(' ')[1];

      if (bearer !== 'Bearer' || !ourToken) {
        throw new UnauthorizedException({ message: 'No token provided.' });
      }

      const user = this.jwtService.verify(ourToken);

      if (!user.isUser) {
        return true;
      } else {
        throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
      }
    } catch (err) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
