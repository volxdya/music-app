import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/createUserDto';
import { User } from '../user/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  private validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  // function for examination user data's (really data and data, which come from frontend)

  private async validateUser(dto: CreateUserDto) {
    const user: User = await this.UserService.getOne(dto.login);

    if (user && (await this.validatePassword(dto.password, user.password))) {
      return user;
    }


    throw new UnauthorizedException({
      message: 'Некорректный email или пароль',
    });
  }

  // function which generate token

  private async generateToken(user: User) {
    // payload - data which need return in auth
    const payload = {
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.id,
      isUser: user.isUser,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async login(userDto: CreateUserDto) {
    const user: User = await this.validateUser(userDto);

    return this.generateToken(user);
  }
}
