import { Column, DataType, Table, Model, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import { Pedido } from "src/pedido/entities/pedido.entity";
import { Producto } from '../../producto/entities/producto.entity';


@Table({
    tableName: 'pedido_producto',
    timestamps: false,
    paranoid: false
})
export class PedidoProducto extends Model {

    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataType.INTEGER
    })
    id_pedido_producto: number;
    @Column({
        type: DataType.STRING
    })
    chinela:string;
    @Column({
        type: DataType.STRING
    })
    color:string;
    @Column({
        type: DataType.STRING
    })
    tubo:string;
    @Column({
        type: DataType.STRING
    })
    color_tubo:string;
    @Column({
        type: DataType.STRING
    })
    forro:string;
    @Column({
        type: DataType.STRING
    })
    suela:string;
    @Column({
        type: DataType.STRING
    })
    costura:string;
    @Column({
        type: DataType.STRING
    })
    bordado:string;
    @Column({
        type: DataType.STRING
    })
    ringle:string;
    @Column({
        type: DataType.STRING
    })  
    tacon:string;
    @Column({
        type: DataType.STRING
    })
    acabado:string;
    @Column({
        type: DataType.STRING
    })
    entre_suela:string;
    @Column({
        type: DataType.STRING
    })
    cantidad:number;
    @Column({
        type: DataType.STRING
    })
    observaciones:string;

    @Column({
        type: DataType.JSONB
    })
    numeracion: string;

    @ForeignKey(() => Pedido)
    id_pedido: number;

    @ForeignKey(() => Producto)
    id_producto: number;

    @BelongsTo(() => Pedido)
    pedido: Pedido;
    
    @BelongsTo(() => Producto)
    Producto: Producto;

    


}
