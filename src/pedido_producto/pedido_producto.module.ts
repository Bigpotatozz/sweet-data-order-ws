import { Module } from '@nestjs/common';
import { PedidoProductoService } from './pedido_producto.service';
import { PedidoProductoController } from './pedido_producto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PedidoProducto } from './entities/pedido_producto.entity';
import { PedidoModule } from 'src/pedido/pedido.module';
import { NumeracionModule } from 'src/numeracion/numeracion.module';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { Numeracion } from 'src/numeracion/entities/numeracion.entity';

@Module({
  imports: [SequelizeModule.forFeature([Pedido, PedidoProducto, Numeracion])],
  controllers: [PedidoProductoController],
  providers: [PedidoProductoService],
})
export class PedidoProductoModule {}
