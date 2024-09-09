import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcryptjs';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {

  constructor(@InjectModel(Usuario) private usuario: typeof Usuario){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    
    try{
      
      const salt = bcrypt.genSaltSync(10);
      const encriptedPassword = bcrypt.hashSync(createUsuarioDto.contrasenia, salt);       
      const user = await this.usuario.create({nombre: createUsuarioDto.nombre,
                                              apellido_paterno: createUsuarioDto.apellido_paterno,
                                              apellido_materno: createUsuarioDto.apellido_materno,
                                              correo: createUsuarioDto.correo,
                                              contrasenia: encriptedPassword,
                                              telefono: createUsuarioDto.telefono,
                                              direccion: createUsuarioDto.direccion,
                                              fecha_creacion: new Date(),
                                              puesto: createUsuarioDto.puesto,
                                              estatus: 'AC'
                                            });

      return user;
    }catch(error){
      console.log(error);
      return error;
    }
 


    
  }

  async findAll() {
    try{

      const usuarios = await this.usuario.findAll({
        attributes: ['id_usuario', 'nombre', 'apellido_paterno', 'apellido_materno', 'correo', 'telefono', 'direccion', 'fecha_creacion', 'puesto'],
        where: {estatus: 'AC'}});

      if(!usuarios){
        return 'No se encontraron usuarios';
      }

      
      return usuarios;

    }catch(error){
      console.log(error);
      return error;
    }
  }

  async findOne(id: number) {
    try{

      const usuario = await this.usuario.findByPk(id, {
        attributes: ['id_usuario', 'nombre', 'apellido_paterno', 'apellido_materno', 'correo', 'telefono', 'direccion', 'fecha_creacion', 'puesto']});

      if(!usuario){
        return 'No se encontro el usuario';
      }

      return usuario;

    }catch(error){
      console.log(error);
      return error;
    }
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    try{

      const userUpdated = await this.usuario.update(updateUsuarioDto, {where: {id_usuario: id}});
      if(!userUpdated){
        return 'No se pudo actualizar el usuario';
      }
      return 'Usuario actualizado correctamente';

    }catch(error){
      console.log(error);
      return error;
    }
  }

  remove(id: number) {
    
    try{

      const userDeleted = this.usuario.update({estatus: 'IN'}, {where: {id_usuario: id}});
      if(!userDeleted){
        return 'No se pudo eliminar el usuario';
      }
      return 'Usuario eliminado correctamente';

    }catch(error){
      console.log(error);
      return error;
    }
  }
}
