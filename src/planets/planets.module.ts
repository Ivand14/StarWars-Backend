import { Planet, schemaPlanet } from './entities/planet.entity';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetsService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Planet.name,
        schema: schemaPlanet
      }
    ])
  ],
  exports:[
    PlanetsService,
    MongooseModule
  ]
})
export class PlanetsModule {}
