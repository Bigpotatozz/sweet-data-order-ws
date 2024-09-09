import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './usuario/entities/usuario.entity';



@Module({
  imports: [UsuarioModule, 
    ConfigModule.forRoot({isGlobal: true}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.HOST,
      port: 5432,
      username: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      models: [Usuario],
      autoLoadModels: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
