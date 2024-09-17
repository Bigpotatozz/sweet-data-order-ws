import { Injectable } from '@nestjs/common';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { PedidoProducto } from './entities/pedido_producto.entity';
import { Numeracion } from 'src/numeracion/entities/numeracion.entity';

@Injectable()
export class PedidoProductoService {

  constructor(@InjectModel(Pedido) private pedido: typeof Pedido,
              @InjectModel(PedidoProducto) private pedidoProducto: typeof PedidoProducto,
              @InjectModel(Numeracion) private numeracion: typeof Numeracion){}

              
  create(createPedidoProductoDto: CreatePedidoProductoDto) {
    return 'This action adds a new pedidoProducto';
  }

  findAll() {
    return `This action returns all pedidoProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoProducto`;
  }

  update(id: number, updatePedidoProductoDto: UpdatePedidoProductoDto) {
    return `This action updates a #${id} pedidoProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoProducto`;
  }
}
