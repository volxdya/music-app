import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Track} from "./track.model";
import {CreateTrackDto} from "./dto/createTrackDto";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track) private readonly trackRepository: typeof Track) {
    }

    async create(dto: CreateTrackDto) {
        return this.trackRepository.create(dto);
    }

    async getAll() {
        return this.trackRepository.findAll({include: {all: true}});
    }

    async getById(trackId: number) {
        const track = await this.trackRepository.findOne({where: {id: trackId}});

        return track;
    }

    async search(title: string){
        const tracks = await this.trackRepository.findAll({include: {all: true}});

        const filtredTracks = tracks.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()));
        return filtredTracks;
    }
}
