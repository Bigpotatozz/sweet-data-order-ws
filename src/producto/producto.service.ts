import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {

  constructor(@InjectModel(Producto) private producto: typeof Producto){}
  async create(createProductoDto: CreateProductoDto) {
   
    try{

      const nuevoProducto = await this.producto.create({estilo: createProductoDto.estilo, 
                                                        precio: createProductoDto.precio});
      return nuevoProducto;

    }catch(error){
      console.log(error);
      return error
    }
  }

  async findAll() {
    
    try{
      const productos = await this.producto.findAll();

      if(!productos){
        return {mensaje: 'No hay productos'};
      }

      return productos;
    }catch(error){
      console.log(error);
      return error;
    }
   

  }

  async findOne(id: number) {
    try{
      const producto = await this.producto.findByPk(id);

      if(!producto){
        return {mensaje: 'No se encontro el producto'};
      }

      return producto;


    }catch(error){
      console.log(error);
      return error;
    }
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    try{

      const updatedProduct = await this.producto.update(updateProductoDto, {where: {id_producto: id}});
      return {mensaje: 'Producto actualizado'};

    }catch(error){
      console.log(error);
      return error;
    }
  }
}
