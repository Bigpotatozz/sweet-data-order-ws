import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {}
