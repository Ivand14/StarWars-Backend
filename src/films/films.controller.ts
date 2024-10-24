import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmsService } from './films.service';


@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}


  @Get('save')
  saveInDB(){
    return this.filmsService.saveData()
  }

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':episode')
  findOne(@Param('episode') episode: number) {
    return this.filmsService.findOne(+episode);
  }


}
