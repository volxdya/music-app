import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async upload(file): Promise<string> {
    try {
      const fileName: string = uuid.v4() + '.jpg'; // Используем оригинальное расширение файла
      const pathName: string = path.resolve(__dirname, '..', 'uploads'); // Корректный путь для сохранения файла

      if (!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName, { recursive: true });
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      fs.writeFileSync(path.join(pathName, fileName), buffer); // Сохраняем файл

      return fileName;
    } catch (err) {
      console.log(err);

      throw new HttpException('server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
