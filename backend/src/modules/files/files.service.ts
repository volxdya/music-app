import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async upload(file: Express.Multer.File): Promise<string> {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }

    try {
      const fileName: string = uuid.v4() + '.jpg';
      const pathName: string = path.resolve(__dirname, '..', 'src', 'static');

      if (!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName, { recursive: true });
      }

      // Запись файла в директорию
      fs.writeFileSync(path.join(pathName, fileName), file.buffer);

      return fileName;
    } catch (err) {
      console.error(err);

      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
