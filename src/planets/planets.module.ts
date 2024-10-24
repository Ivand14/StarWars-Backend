import { Planet, schemaPlanet } from './entities/planet.entity';

import { CronModule } from 'src/cron/cron.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';

@Module({
  controllers: [PlanetsController],
  providers: [PlanetsService],
  imports:[
    CronModule,
    MongooseModule.forFeature([
      {
        name: Planet.name,
        schema: schemaPlanet
      }
    ])
  ]
})
export class PlanetsModule {}
