import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Producto } from './entities/producto.entity';

@Module({
  imports: [SequelizeModule.forFeature([Producto])],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
