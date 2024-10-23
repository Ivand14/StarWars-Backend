import { CreateStarshipDto } from './dto/create-starship.dto';
import { Injectable } from '@nestjs/common';
import { UpdateStarshipDto } from './dto/update-starship.dto';

@Injectable()
export class StarshipsService {
  create(createStarshipDto: CreateStarshipDto) {
    return 'This action adds a new starship';
  }

  findAll() {
    return `This action returns all starships`;
  }

  findOne(id: number) {
    return `This action returns a #${id} starship`;
  }


}
