import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonDto } from './dto/create-person.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { People } from './entities/person.entity';
import { Model } from 'mongoose';
import { CronService } from 'src/cron/cron.service';
import axios from 'axios';
import { envsValue } from 'src/config/envs';

@Injectable()
export class PeopleService {

  constructor(
    @InjectModel(People.name)
    private readonly peopleModel: Model<People>,
    private readonly cronService: CronService
  ){
    this.scheduleCronJob()
  }

  scheduleCronJob(){
    this.cronService.scheduleJob("*/30 * * * *", `${People.name} Model`, this.savePeopleData.bind(this))
  }
  
  async savePeopleData(){
    const getPeopleData = await axios.get(`${envsValue.API_URL}/people`)
    const data:CreatePersonDto[] = getPeopleData.data.results

    for (const peopleData of data) {
      await this.peopleModel.create(peopleData)
    }

    return 'People data saved successfully'

  }

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
