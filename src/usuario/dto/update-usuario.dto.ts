import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsEmail } from 'class-validator';


export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    nombre: string;
    @IsString()
    apellido_paterno: string;
    @IsString()
    apellido_materno: string;
    @IsString()
    @IsEmail()
    correo: string;
    @IsString()
    telefono: string;
    @IsString()
    direccion: string;
    @IsString()
    puesto: string;
}
