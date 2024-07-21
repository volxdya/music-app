import {Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {CreateUserDto} from "../user/dto/createUserDto";
import {User} from "../user/user.model";

@Injectable()
export class AuthService {
    constructor(
        private UserService: UserService,
        private jwtService: JwtService,
    ) {
    }

    // function for examination user data's (really data and data, which come from frontend)

    private async validateUser(userDto: CreateUserDto) {

        const user = await this.UserService.getOne(userDto.login);

        if (user && userDto.password === user.password) {
            return user;
        }

        throw new UnauthorizedException({ message: 'Некорректный email или пароль' });
    }


    // function which generate token

    private async generateToken(user: User) {

        // payload - data which need return in auth
        const payload = {
            login: user.login,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user.id,
            playlists: user.playlists
        };

        return {
            token: this.jwtService.sign(payload),
        };
    }

    async login(userDto: CreateUserDto) {

        const user = await this.validateUser(userDto);

        return this.generateToken(user);
    }
}