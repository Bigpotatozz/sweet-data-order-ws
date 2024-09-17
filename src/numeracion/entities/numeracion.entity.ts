
import { Column, DataType, Table, Model, ForeignKey, HasOne, BelongsTo } from "sequelize-typescript";
import { PedidoProducto } from "src/pedido_producto/entities/pedido_producto.entity";

@Table({
    tableName: 'numeracion',
    timestamps: false,
    paranoid: false
})
export class Numeracion extends Model{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id_numeracion: number;
    @Column({
        type: DataType.INTEGER,
    })
    dos: number;
    @Column({
        type: DataType.INTEGER,
    })
    dos_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    tres: number;
    @Column({
        type: DataType.INTEGER,
    })
    tres_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    cuatro: number;
    @Column({
        type: DataType.INTEGER,
    })
    cuatro_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    cinco: number;
    @Column({
        type: DataType.INTEGER,
    })
    cinco_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    seis: number;
    @Column({
        type: DataType.INTEGER,
    })
    seis_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    siete: number;
    @Column({
        type: DataType.INTEGER,
    })
    siete_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    ocho: number;
    @Column({
        type: DataType.INTEGER,
    })
    ocho_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    nueve: number;
    @Column({
        type: DataType.INTEGER,
    })
    nueve_medio: number;
    @Column({
        type: DataType.INTEGER,
    })
    treinta: number;

    @ForeignKey(() => PedidoProducto)
    id_pedido_producto: number

    @BelongsTo(() => PedidoProducto)
    pedidoProducto: PedidoProducto;
}
