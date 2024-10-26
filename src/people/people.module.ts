import { People, peopleSchema } from './entities/person.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PeopleController } from './people.controller';
import { PeopleService } from './people.service';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService],
  imports:[
    MongooseModule.forFeature([
      {
        name: People.name,
        schema: peopleSchema
      }
    ])
  ],
  exports:[
    PeopleService,
    MongooseModule
  ]
})
export class PeopleModule {}
