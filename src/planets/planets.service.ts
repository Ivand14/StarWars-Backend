import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Planet } from './entities/planet.entity';
import { Model } from 'mongoose';


@Injectable()
export class PlanetsService {

  constructor(
    @InjectModel(Planet.name)
    private readonly planetModel: Model<Planet>,

  ){}



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
