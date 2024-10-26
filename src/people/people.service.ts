import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { People } from './entities/person.entity';
import { Model } from 'mongoose';


@Injectable()
export class PeopleService {

  constructor(
    @InjectModel(People.name)
    private readonly peopleModel: Model<People>,
  ){}



  async findAll() {
    const allFilms = await this.peopleModel.find()

    if(!allFilms)
      throw new NotFoundException('Not people found')

    return allFilms
  }

  async findOne(name: string) {

    console.log(name)

    const getBy = await this.peopleModel.findOne({name: name})

    if(!getBy)
      throw new NotFoundException(`${name} not found`)

    return getBy

  }

}
