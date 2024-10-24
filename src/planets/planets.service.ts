import { InjectModel } from '@nestjs/mongoose';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Planet } from './entities/planet.entity';
import { Model } from 'mongoose';
import { CronService } from 'src/cron/cron.service';
import axios from 'axios';
import { envsValue } from 'src/config/envs';

@Injectable()
export class PlanetsService {

  constructor(
    @InjectModel(Planet.name)
    private readonly planetModel: Model<Planet>,
    private readonly cronService: CronService
  ){
    this.scheduleJob()
  }

  scheduleJob(){
    this.cronService.scheduleJob("*/1 * * * *",`${Planet.name} Model`, this.savePlanet.bind(this))
  }
  
  async savePlanet() {
    const getPlanets = await axios.get(`${envsValue.API_URL}/planets`)

    const dataPlanets:CreatePlanetDto[] = getPlanets.data.results

    for (const planets of dataPlanets) {
      await this.planetModel.create(planets)
    }

    return 'Planets saved successfully'

  }

  async findAll() {
    const allFilms = await this.planetModel.find()

    if(!allFilms)
      throw new NotFoundException('Not people found')

    return allFilms
  }

  async findOne(name: string) {

    const getBy = await this.planetModel.findOne({name: name})

    if(!getBy)
      throw new NotFoundException(`${name} not found`)

    return getBy

  }

}
