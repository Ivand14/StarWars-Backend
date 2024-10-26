import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Starship } from './entities/starship.entity';
import { Model } from 'mongoose';


@Injectable()
export class StarshipsService {

  constructor(
    @InjectModel(Starship.name)
    private  starshipsModel: Model<Starship>,
  ){}


  async findAll() {
    const allFilms = await this.starshipsModel.find()

    if(!allFilms)
      throw new NotFoundException('Not people found')

    return allFilms
  }

  async findOne(name: string) {

    const getBy = await this.starshipsModel.findOne({name: name})

    if(!getBy)
      throw new NotFoundException(`${name} not found`)

    return getBy

  }


}
