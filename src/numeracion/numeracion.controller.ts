import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumeracionService } from './numeracion.service';
import { CreateNumeracionDto } from './dto/create-numeracion.dto';
import { UpdateNumeracionDto } from './dto/update-numeracion.dto';

@Controller('numeracion')
export class NumeracionController {
  constructor(private readonly numeracionService: NumeracionService) {}

  @Post()
  create(@Body() createNumeracionDto: CreateNumeracionDto) {
    return this.numeracionService.create(createNumeracionDto);
  }

  @Get()
  findAll() {
    return this.numeracionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numeracionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumeracionDto: UpdateNumeracionDto) {
    return this.numeracionService.update(+id, updateNumeracionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeracionService.remove(+id);
  }
}
