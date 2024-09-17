import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoProductoDto } from './create-pedido_producto.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdatePedidoProductoDto extends PartialType(CreatePedidoProductoDto) {
    @IsString()
    chinela:string;
    @IsString()
    color:string;
    @IsString()
    tubo:string;
    @IsString()
    color_tubo:string;
    @IsString()
    forro:string;
    @IsString()
    suela:string;
    @IsString()
    costura:string;
    @IsString()
    bordado:string;
    @IsString()
    ringle:string;
    @IsString()
    tacon:string;
    @IsString()
    acabado:string;
    @IsString()
    entre_suela:string;
    @IsNumber()
    precio:number;
    @IsNumber()
    cantidad:number;
    @IsString()
    observaciones:string;
}
