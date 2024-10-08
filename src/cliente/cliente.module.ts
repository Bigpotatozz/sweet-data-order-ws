import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';
import { PedidoModule } from 'src/pedido/pedido.module';

@Module({
  imports: [SequelizeModule.forFeature([Cliente]), PedidoModule],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
