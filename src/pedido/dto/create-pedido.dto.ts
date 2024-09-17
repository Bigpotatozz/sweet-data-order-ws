import {IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {

    @IsString()
    nombre_pedido: string;

    fecha_alta: Date;

    fecha_entrega: Date;

    @IsNumber()
    total_pares: number;

    @IsNumber()
    total: number;

    @IsNumber()
    id_usuario: number;
    
    @IsNumber()
    id_cliente: number;


  
}
