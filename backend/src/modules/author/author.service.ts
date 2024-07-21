import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Author} from "./author.model";

@Injectable()
export class AuthorService {
    constructor(@InjectModel(Author) private readonly authorRepository: typeof Author,) {
    }

    async create() {

    }

    async getAll() {
        const authors: Author[] = await this.authorRepository.findAll();

        return authors;
    }
}
