import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidoProductoService } from './pedido_producto.service';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { CreatePedidoDto } from 'src/pedido/dto/create-pedido.dto';


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

  @Get()
  findAll() {
    return this.pedidoProductoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoProductoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidoProductoDto: UpdatePedidoProductoDto) {
    return this.pedidoProductoService.update(+id, updatePedidoProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoProductoService.remove(+id);
  }
}
