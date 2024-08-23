import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';
import { Buffer } from 'node:buffer';

@Injectable()
export class FilesService {
  async upload(file: File): Promise<string> {
    try {
      const fileName: string = file ? file.name : 'grewgegrgergergergreg';
      const pathName: string = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName, { recursive: true });
      }

      const data = new Uint8Array(Buffer.from(fileName));
      fs.writeFileSync(path.join(pathName, fileName), data); // Сохраняем файл

      return fileName;
    } catch (err) {
      console.log(err);

      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
