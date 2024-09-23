import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoProductoDto } from './create-pedido_producto.dto';
import { IsJSON, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePedidoProductoDto extends PartialType(CreatePedidoProductoDto) {
    @IsNumber()
    @IsNotEmpty()
    id_pedido_producto:number;
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
    cantidad:number;
    @IsJSON()
    numeracion?: JSON;
    @IsString()
    observaciones:string;
}
