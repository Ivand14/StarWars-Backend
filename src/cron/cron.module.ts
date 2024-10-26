import { CronService } from './cron.service';
import { FilmsModule } from 'src/films/films.module';
import { Module } from '@nestjs/common';
import { PeopleModule } from 'src/people/people.module';
import { PlanetsModule } from 'src/planets/planets.module';
import { StarshipsModule } from 'src/starships/starships.module';

@Module({
  providers: [CronService],
  exports:[CronService],
  imports:[
    FilmsModule,
    PeopleModule,
    StarshipsModule,
    PlanetsModule
  ]
})
export class CronModule {}
