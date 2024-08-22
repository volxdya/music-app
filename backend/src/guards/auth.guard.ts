import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../modules/auth/auth.service';

export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    try {
      const token = req.headers.authorization;
      const bearer: string = token.split(' ')[0];
      const ourToken: string = token.split(' ')[1];

      if (bearer !== 'Bearer' || !ourToken) {
        throw new UnauthorizedException({ message: 'No token provided.' });
      }

      return true;
    } catch (err) {
      throw new UnauthorizedException({ message: 'No token provided.' });
    }
  }
}
