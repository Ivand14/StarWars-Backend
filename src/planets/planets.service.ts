import { CreatePlanetDto } from './dto/create-planet.dto';
import { Injectable } from '@nestjs/common';
import { UpdatePlanetDto } from './dto/update-planet.dto';

@Injectable()
export class PlanetsService {
  create(createPlanetDto: CreatePlanetDto) {
    return 'This action adds a new planet';
  }

  findAll() {
    return `This action returns all planets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planet`;
  }

}
