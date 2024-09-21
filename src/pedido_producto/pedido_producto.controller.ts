import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PedidoProductoService } from './pedido_producto.service';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { CreatePedidoDto } from 'src/pedido/dto/create-pedido.dto';
import { UpdatePedidoDto } from 'src/pedido/dto/update-pedido.dto';


@Controller('pedido')
export class PedidoProductoController {
  constructor(private readonly pedidoProductoService: PedidoProductoService) {}

  @Post('/crearPedido')
  async create(@Body() data: {products: [CreatePedidoProductoDto], order: CreatePedidoDto}) {

    try{

      const pedido = await this.pedidoProductoService.create(data.products, data.order);
      return pedido;
    }catch(error){
      console.log(error);
      return error;
    }
 
  }

  @Get('/obtenerPedidos/:id')
  findAll(@Param('id') id: number) {
    return this.pedidoProductoService.findAll(id);
  }

  @Put('/modificarPedido/:id_pedido')
  async update(@Param('id_pedido') id: string, @Body() data: {productos: UpdatePedidoProductoDto, pedido: UpdatePedidoDto}) {

    try{
      console.log(data.pedido);
      const pedido = await this.pedidoProductoService.update(+id,data.pedido);
      return pedido;
    }catch(error){
      console.log(error);
      return error;
    }
    

  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoProductoService.remove(+id);
  }
}
