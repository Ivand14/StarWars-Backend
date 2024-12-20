import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';


@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':episode')
  findOne(@Param('episode') episode: number) {
    return this.filmsService.findOne(+episode);
  }


}
