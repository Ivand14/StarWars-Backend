import { People, peopleSchema } from './entities/person.entity';

import { CronModule } from 'src/cron/cron.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService],
  imports:[
    CronModule,
    MongooseModule.forFeature([
      {
        name: People.name,
        schema: peopleSchema
      }
    ])
  ]
})
export class PeopleModule {}
