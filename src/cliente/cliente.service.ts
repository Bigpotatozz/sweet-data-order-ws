import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Cliente } from './entities/cliente.entity';
import { where } from 'sequelize';

@Injectable()
export class ClienteService {

  constructor(@InjectModel(Cliente) private cliente: typeof Cliente){}

  async create(createClienteDto: CreateClienteDto) {
    
    try{

      const client = await this.cliente.create({nombre: createClienteDto.nombre,
                                                apellido: createClienteDto.apellido,
                                                correo: createClienteDto.correo,
                                                telefono: createClienteDto.telefono,
                                                direccion: createClienteDto.direccion,
                                                estado: createClienteDto.estado,
                                                municipio: createClienteDto.municipio,
                                                puesto: createClienteDto.puesto,
                                                ultima_visita: createClienteDto.ultima_visita,
                                                fecha_alta: new Date(),
      });

      if(!client){
        return 'No se pudo crear el cliente';
      }
      return client;
      
    }catch(error){
      console.log(error);
      return error;
    }

  }

  async findAll() {
    try{
      const clientes = await this.cliente.findAll({where: {estatus: 'AC'}});

      if(!clientes){
        return 'No se encontraron clientes';
      }
      return clientes;
    }catch(error){
      console.log(error);
      return error;
    }
  }

  async findOne(id: number) {
    
    try{

      const cliente = await this.cliente.findByPk(id);

      if(!cliente){
        return 'No se encontro el cliente';
      }

      return cliente;

    }catch(error){
      console.log(error);
      return error;
    }

  
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    try{
      const updatedClient = await this.cliente.update(updateClienteDto, {where: {id_cliente: id}});

      if(!updatedClient){
        return 'No se pudo actualizar el cliente';
      }

      return "Cliente actualizado";
    }catch(error){
      console.log(error);
      return error;
    }
  }

  async remove(id: number) {
    try{
      const deletedClient = await this.cliente.update({estatus: 'IN'}, {where: {id_cliente: id}});
      if(!deletedClient){
        return 'No se pudo eliminar el cliente';
      }
      return 'Cliente eliminado';
    }catch(error){
      console.log(error);
      return error;
    }
  }
}
