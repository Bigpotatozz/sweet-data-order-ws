import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('/crearCliente')
  async create(@Body() createClienteDto: CreateClienteDto) {
    try{
      return await this.clienteService.create(createClienteDto);
    }catch(error){
      console.log(error);
      return error;
    }
    
  }

  @Get('/obtenerClientes')
  async findAll() {

    try{
      return await this.clienteService.findAll();
    }catch(error){
      console.log(error);
      return error;
    }
   
  }

  @Get('/obtenerCliente/:id')
  async findOne(@Param('id') id: string) {

    try{
      return await this.clienteService.findOne(+id);
    }catch(error){
      console.log(error);
      return error;
    } 
    
  }

  @Put('/modificarCliente/:id')
  async update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {

    try{
      return await this.clienteService.update(+id, updateClienteDto);
    }catch(error){
      console.log(error);
      return error;
    }
    
  }

  @Delete('/eliminarCliente/:id')
  async remove(@Param('id') id: string) {
    return await this.clienteService.remove(+id);
  }
}
