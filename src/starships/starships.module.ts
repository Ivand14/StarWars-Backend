import { Starship, StarshipSchema } from './entities/starship.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StarshipsController } from './starships.controller';
import { StarshipsService } from './starships.service';

@Module({
  controllers: [StarshipsController],
  providers: [StarshipsService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Starship.name,
        schema: StarshipSchema
      }
    ])
  ],
  exports:[
    StarshipsService,
    MongooseModule
  ]
})
export class StarshipsModule {}
