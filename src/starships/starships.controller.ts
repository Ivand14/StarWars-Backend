import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { CreateStarshipDto } from './dto/create-starship.dto';
import { UpdateStarshipDto } from './dto/update-starship.dto';

@Controller('starships')
export class StarshipsController {
  constructor(private readonly starshipsService: StarshipsService) {}



  @Get()
  findAll() {
    return this.starshipsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.starshipsService.findOne(+id);
  }


}
