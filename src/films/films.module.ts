import { Film, filmSchema } from './entities/film.entity';

import { CronModule } from 'src/cron/cron.module';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [FilmsController],
  providers: [FilmsService],
  imports:[
    CronModule,
    MongooseModule.forFeature([
      {
        name: Film.name,
        schema: filmSchema
      }
    ]),
  ]
})
export class FilmsModule {}
