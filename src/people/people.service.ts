import { CreatePersonDto } from './dto/create-person.dto';
import { Injectable } from '@nestjs/common';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PeopleService {
  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all people`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

}
