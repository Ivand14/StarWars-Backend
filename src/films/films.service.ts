import { CreateFilmDto } from './dto/create-film.dto';
import { Film } from './entities/film.entity';
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel} from '@nestjs/mongoose'
import axios from 'axios';
import { CronService } from 'src/cron/cron.service';
import { envsValue } from 'src/config/envs';


@Injectable()
export class FilmsService {

  constructor(
    @InjectModel(Film.name)
    private readonly FilmModel: Model<Film>,
    private readonly cronService: CronService
  ){
    this.scheduleCronJob()
  }

  scheduleCronJob() {
    this.cronService.scheduleJob('*/20 * * * *', 'Films',this.saveData.bind(this));
  }


  async saveData() {

    const data = await axios.get(`${envsValue.API_URL}/films`)

    const films:CreateFilmDto[] = data.data.results

    for (const filmData of films) {
      await this.FilmModel.create(films)
    }

    if(!films)
      throw new InternalServerErrorException("error when collecting data")
    
    return 'Films saved'
  }

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
