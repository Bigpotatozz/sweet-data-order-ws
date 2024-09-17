import { Injectable } from '@nestjs/common';
import { CreateNumeracionDto } from './dto/create-numeracion.dto';
import { UpdateNumeracionDto } from './dto/update-numeracion.dto';

@Injectable()
export class NumeracionService {
  create(createNumeracionDto: CreateNumeracionDto) {
    return 'This action adds a new numeracion';
  }

  findAll() {
    return `This action returns all numeracion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} numeracion`;
  }

  update(id: number, updateNumeracionDto: UpdateNumeracionDto) {
    return `This action updates a #${id} numeracion`;
  }

  remove(id: number) {
    return `This action removes a #${id} numeracion`;
  }
}
