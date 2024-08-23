import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

export const STATIC_CONFIG = ServeStaticModule.forRoot({
  rootPath: join(__dirname, '..', 'src', 'static'),
});
