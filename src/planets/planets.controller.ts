import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { CreatePlanetDto } from './dto/create-planet.dto';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get('save')
  savePlanet(){
    return this.planetsService.savePlanet()
  }

  @Get()
  findAll() {
    return this.planetsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.planetsService.findOne(name);
  }


}
