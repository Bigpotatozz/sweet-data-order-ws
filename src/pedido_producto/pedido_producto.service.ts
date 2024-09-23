import { Inject, Injectable } from '@nestjs/common';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { PedidoProducto } from './entities/pedido_producto.entity';
import { CreatePedidoDto } from '../pedido/dto/create-pedido.dto';
import { Sequelize } from 'sequelize-typescript';
import { Producto } from 'src/producto/entities/producto.entity';
import { UpdatePedidoDto } from '../pedido/dto/update-pedido.dto';

@Injectable()
export class PedidoProductoService {

  constructor(private sequelize: Sequelize,
              @InjectModel(Pedido) private pedido: typeof Pedido,
              @InjectModel(PedidoProducto) private pedidoProducto: typeof PedidoProducto,
              @InjectModel(Producto) private producto: typeof Producto
             ){}

              
  async create(products: [CreatePedidoProductoDto], order: CreatePedidoDto) {
    const transaccion = await this.sequelize.transaction();
    try{
      const pedido = await this.pedido.create({
                                        nombre_pedido: order.nombre_pedido,
                                        fecha_alta: new Date(),
                                        fecha_entrega: order.fecha_entrega,
                                        total_pares: 0,
                                        total: 0,
                                        id_usuario: order.id_usuario,
                                        id_cliente: order.id_cliente
                                      }, {transaction: transaccion});

      let cantidad = 0;
      let total = 0;
      for(let detalle of products){
        const producto = await this.pedidoProducto.create({chinela: detalle.chinela,
                                                            color: detalle.color,
                                                            tubo: detalle.tubo,
                                                            color_tubo: detalle.color_tubo,
                                                            forro: detalle.forro,
                                                            suela: detalle.suela,
                                                            costura: detalle.costura,
                                                            bordado: detalle.bordado,
                                                            ringle: detalle.ringle,
                                                            tacon: detalle.tacon,
                                                            acabado: detalle.acabado,
                                                            entre_suela: detalle.entre_suela,
                                                            cantidad: detalle.cantidad,
                                                            observaciones: detalle.observaciones,
                                                            numeracion: detalle.numeracion,
                                                            id_producto: detalle.id_producto,
                                                            id_pedido: pedido.id_pedido
        }, {transaction: transaccion});

        let productPrice = await this.producto.findOne({ attributes: ['precio'], where: {id_producto: detalle.id_producto}, transaction: transaccion} );

        if(!productPrice){
          return 'Hubo un error'
        }

        cantidad = cantidad + detalle.cantidad;
        total = total + (productPrice.precio * detalle.cantidad);

      }

      console.log(total);

      const search = await this.pedido.findOne({where: {id_pedido: pedido.id_pedido}, transaction: transaccion} );
      const updatePedido = await search.update({total_pares: cantidad,total: total},{transaction: transaccion});
      


      await transaccion.commit();

     

      return 'Pedido creado correctamente';



    }catch(error){
      console.log(error);
      await transaccion.rollback();
      return error;
    }

  }

  async findAll(id_usuario: number) {
    
    try{

      const pedidos = await this.pedido.findAll({where: {id_usuario: id_usuario, estatus: true}});

      if(!pedidos){
        return 'No hay pedidos existentes';
      }


      let products = [];

      for(let pedido of pedidos){
        const productos = await this.pedidoProducto.findAll({where: {id_pedido: pedido.id_pedido}});

        let order = {
          id_pedido: pedido.id_pedido,
          nombre_pedido: pedido.nombre_pedido,
          fecha_alta: pedido.fecha_alta,
          fecha_entrega: pedido.fecha_entrega,
          total_pares: pedido.total_pares,
          total: pedido.total,
          id_usuario: pedido.id_usuario,
          id_cliente: pedido.id_cliente,

          productos: productos
        }
        products.push(order);
      }

      return {
        
        pedidos: products
        
      };
     


    }catch(error){
      console.log(error);
      return error;
    }
  }


  async update(id_pedido: number, updatePedidoDto: UpdatePedidoDto, updatePedidoProductoDto: UpdatePedidoProductoDto[]) {

    const transaccion = await this.sequelize.transaction();
    try{
      const pedido = await this.pedidoProducto.findAll({where: {id_pedido: id_pedido}, include: [{model: Pedido}, {model: Producto}], transaction: transaccion});

      if(!pedido){
        return {message: 'No se encontro el pedido'};
      }

      for(let producto of updatePedidoProductoDto){
        const updated_product = await this.pedidoProducto.update({chinela: producto.chinela,
                                                            color: producto.color,
                                                            tubo: producto.tubo,
                                                            color_tubo: producto.color_tubo,
                                                            forro: producto.forro,
                                                            suela: producto.suela,
                                                            costura: producto.costura,
                                                            bordado: producto.bordado,
                                                            ringle: producto.ringle,
                                                            tacon: producto.tacon,
                                                            acabado: producto.acabado,
                                                            entre_suela: producto.entre_suela,
                                                            cantidad: producto.cantidad,
                                                            observaciones: producto.observaciones,
                                                            numeracion: producto.numeracion,
        }, {where: {id_pedido_producto: producto.id_pedido_producto}, transaction: transaccion});
      }

      const productos =  await this.pedidoProducto.findAll({where: {id_pedido: id_pedido}, transaction: transaccion});
      let total = 0;
      let cantidad = 0;

      for(let producto of productos){

        const productPrice = await this.producto.findOne({attributes: ['precio'], where: {id_producto: producto.id_producto}, transaction: transaccion});

        if(!productPrice){
          return {message: 'No se encontro el producto'};
        }

        cantidad = cantidad + producto.cantidad;
        total = total + (productPrice.precio * producto.cantidad);
      }

      console.log(total, cantidad);
      const update_pedido = await this.pedido.update({nombre_pedido: updatePedidoDto.nombre_pedido, 
                                                      fecha_entrega: updatePedidoDto.fecha_entrega,
                                                      total_pares: cantidad,
                                                      total: total},{where: {id_pedido: id_pedido}, transaction: transaccion});
        
      transaccion.commit();
      return {message: 'Pedido actualizado correctamente'};


      
    }catch(error){
      console.log(error);
      transaccion.rollback();
      return error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoProducto`;
  }
}
