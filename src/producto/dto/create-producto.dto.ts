import { IsNumber, IsString } from "class-validator";

export class CreateProductoDto {

    @IsString()
    estilo: string;
    @IsNumber()
    precio: number;


}
