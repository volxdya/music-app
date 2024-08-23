import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly fileService: FilesService) {}

  @UseInterceptors(FilesInterceptor('file'))
  @Post(`/create`)
  create(@UploadedFile() file: Express.Multer.File) {
    return this.fileService.upload(file);
  }
}
