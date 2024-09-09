import { IsEmail, IsString, IsDate } from "class-validator";
import { Is } from "sequelize-typescript";


export class CreateClienteDto {

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
