import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PeopleService } from './people.service';
import { CreatePersonDto } from './dto/create-person.dto';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('save')
  savePeopleData(){
    return this.peopleService.savePeopleData()
  }

  @Get()
  findAll() {
    return this.peopleService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.peopleService.findOne(name);
  }


}
