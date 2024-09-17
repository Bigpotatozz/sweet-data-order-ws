import { Inject, Injectable } from '@nestjs/common';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Pedido } from 'src/pedido/entities/pedido.entity';
import { PedidoProducto } from './entities/pedido_producto.entity';
import { CreatePedidoDto } from '../pedido/dto/create-pedido.dto';
import { Sequelize } from 'sequelize-typescript';
import { Producto } from 'src/producto/entities/producto.entity';

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
      let total: 0;
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

        console.log(productPrice.precio);
     
        let subtotal = productPrice.precio * detalle.cantidad;
        
        total += subtotal;
    
      }
      console.log('Total: ' + total);
      console.log('Cantidad: ' + cantidad);
  
      await this.pedido.update({total_precio: total, total_pares: cantidad}, {where: {id_pedido: pedido.id_pedido}, transaction: transaccion});


      await transaccion.commit();

      return 'Pedido creado correctamente';



    }catch(error){
      console.log(error);
      await transaccion.rollback();
      return error;
    }

  }

  findAll() {
    return `This action returns all pedidoProducto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pedidoProducto`;
  }

  update(id: number, updatePedidoProductoDto: UpdatePedidoProductoDto) {
    return `This action updates a #${id} pedidoProducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedidoProducto`;
  }
}
