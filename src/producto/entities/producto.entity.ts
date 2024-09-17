import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { PedidoProducto } from "src/pedido_producto/entities/pedido_producto.entity";

@Table({
    tableName: 'producto',
    timestamps: false,
    paranoid: false
})
export class Producto extends Model{

    @Column({
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataType.INTEGER
    })
    id_producto: number;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    estilo: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    precio: number
    
    @HasMany(() => PedidoProducto)
    pedido_producto: PedidoProducto[];
}
