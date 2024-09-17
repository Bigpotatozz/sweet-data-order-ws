import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Pedido } from './entities/pedido.entity';

@Module({
  imports: [SequelizeModule.forFeature([Pedido])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
