import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';
import { IsString, IsEmail } from 'class-validator';


export class UpdateClienteDto extends PartialType(CreateClienteDto) {

    @IsString()
    nombre: string;
    
    @IsString()
    apellido: string;

    @IsEmail()
    @IsString()
    correo: string;

    @IsString()
    telefono: string;

    @IsString()
    direccion: string;

    @IsString()
    estado: string;

    @IsString()
    municipio: string;

    @IsString()
    puesto: string;
    

    ultima_visita: Date;

}
