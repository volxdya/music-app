import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import {CreateUserDto} from "./dto/createUserDto";
import {PlaylistService} from "../playlist/playlist.service";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User) private readonly userRepository: typeof User,
        private readonly playlistService: PlaylistService
    ) {
    }

    async getAll() {
        const users: User[] = await this.userRepository.findAll({include: {all: true}});

        return users;
    }

    async create(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const playlist = await this.playlistService.create(
            {
                userId: user.id,
                title: "Мне нравится",
                description: "",
                avatarUrl: "",
                likes: 0,
            }
        );

        await user.$set("playlists", [playlist]);
        user.playlists = [playlist];

        return user;
    }
}
