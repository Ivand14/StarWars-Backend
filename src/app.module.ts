import { CronModule } from './cron/cron.module';
import { FilmsModule } from './films/films.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeopleModule } from './people/people.module';
import { PlanetsModule } from './planets/planets.module';
import { StarshipsModule } from './starships/starships.module';
import { envsValue } from './config/envs';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-starwars'),
    PeopleModule,
    FilmsModule,
    StarshipsModule,
    PlanetsModule,
    CronModule
  ],

})
export class AppModule {}
