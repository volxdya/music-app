import {Controller, Get} from '@nestjs/common';
import {AuthorService} from "./author.service";

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {
    }

    @Get(`/get_all`)
    getAll() {
        return this.authorService.getAll();
    }
}
