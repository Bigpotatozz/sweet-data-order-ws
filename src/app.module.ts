import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './usuario/entities/usuario.entity';
import { ClienteModule } from './cliente/cliente.module';
import { Cliente } from './cliente/entities/cliente.entity';
import { ProductoModule } from './producto/producto.module';
import { Producto } from './producto/entities/producto.entity';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoProductoModule } from './pedido_producto/pedido_producto.module';
import { Pedido } from './pedido/entities/pedido.entity';
import { Numeracion } from './numeracion/entities/numeracion.entity';
import { NumeracionModule } from './numeracion/numeracion.module';
import { PedidoProducto } from './pedido_producto/entities/pedido_producto.entity';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [Usuario, Cliente, Producto, Pedido, Numeracion, PedidoProducto],
      autoLoadModels: true,
      synchronize: true,
    }),
    PedidoModule,
    PedidoProductoModule,
    NumeracionModule,
    UsuarioModule, 
    ClienteModule, 
    ProductoModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
