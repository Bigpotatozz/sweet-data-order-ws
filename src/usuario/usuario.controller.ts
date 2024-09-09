import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('/crearUsuario')
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    try{
      return this.usuarioService.create(createUsuarioDto);
    }catch(error){
      console.log(error);
      return 'Ups, ocurrio un error';
    }
  }

  @Get('/obtenerUsuarios')
  findAll() {
    try{
      return this.usuarioService.findAll();
    }catch(error){
      console.log(error);
      return 'Ups, ocurrio un error';
    }
   
  }

  @Get('/obtenerUsuario/:id')
  findOne(@Param('id') id: string) {
    try{
      return this.usuarioService.findOne(+id);
    }catch(error){
      console.log(error);
      return 'Ups, ocurrio un error';
    }
  }

  @Put('/modificarUsuario/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    try{
      return this.usuarioService.update(+id, updateUsuarioDto);
    }catch(error){
      console.log(error);
      return 'Ups, ocurrio un error';
    }
  }

  @Delete('/eliminarUsuario/:id')
  remove(@Param('id') id: string) {
    try{
      return this.usuarioService.remove(+id);
    }catch(error){
      console.log(error);
      return 'Ups, ocurrio un error';
    }
  }
}
