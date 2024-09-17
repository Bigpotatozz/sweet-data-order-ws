import { Module } from '@nestjs/common';
import { NumeracionService } from './numeracion.service';
import { NumeracionController } from './numeracion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Numeracion } from './entities/numeracion.entity';

@Module({
  imports: [SequelizeModule.forFeature([Numeracion])],
  controllers: [NumeracionController],
  providers: [NumeracionService],
})
export class NumeracionModule {}
