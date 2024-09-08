import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigBD } from './config/config.module';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [UsuarioModule, ConfigBD, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
