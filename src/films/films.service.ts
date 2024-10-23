import { CreateFilmDto } from './dto/create-film.dto';
import { Injectable } from '@nestjs/common';
import { UpdateFilmDto } from './dto/update-film.dto';

@Injectable()
export class FilmsService {
  create(createFilmDto: CreateFilmDto) {
    return 'This action adds a new film';
  }

  findAll() {
    return `This action returns all films`;
  }

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }


}
