import { IsEmail, IsString } from "class-validator";

export class CreateUsuarioDto {


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
    contrasenia: string;
    @IsString()
    telefono: string;
    @IsString()
    direccion: string;
    @IsString()
    puesto: string;

}
