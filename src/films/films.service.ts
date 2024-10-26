import { Film } from './entities/film.entity';
import {  Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose'


@Injectable()
export class FilmsService {

  constructor(
    @InjectModel(Film.name)
    private readonly FilmModel: Model<Film>,
  ){}



  async findAll() {
    const allFilms = await this.FilmModel.find()

    if(!allFilms)
      throw new NotFoundException('Not films found')

    return allFilms
  }

  async findOne(episode: number) {

    const getBy = await this.FilmModel.findOne({episode_id:episode})

    if(!getBy)
      throw new NotFoundException(`Film whit ID: ${episode} not found`)

    return getBy

  }



}
