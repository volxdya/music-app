import { UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

export function guardToken(req: Request): string {
  const token: string = req.headers.authorization;
  const bearer: string = token.split(' ')[0];
  const ourToken: string = token.split(' ')[1];

  if (bearer !== 'Bearer' || !ourToken) {
    throw new UnauthorizedException({ message: 'No token provided.' });
  }

  return ourToken;
}
