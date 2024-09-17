import { BelongsTo, Column, DataType, ForeignKey, Table, Model } from "sequelize-typescript";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { Producto } from "src/producto/entities/producto.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";

@Table({
    tableName: "pedido",
    timestamps: false,
    paranoid: false
})
export class Pedido extends Model{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id_pedido: number;
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    fecha_alta: Date;
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    fecha_entrega: Date;
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    total_pares: number;
    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    total: number;
    
    @ForeignKey(() => Usuario)
    id_usuario: number;

    @ForeignKey(() => Cliente)
    id_cliente: number;

    @BelongsTo(() => Cliente)
    cliente: Cliente;

    @BelongsTo(() => Usuario)
    usuario: Usuario;

}
