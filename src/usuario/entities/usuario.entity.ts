import { Model, Column, DataType, Table, HasMany } from "sequelize-typescript";
import { Pedido } from "src/pedido/entities/pedido.entity";

@Table({
    tableName: 'usuario',
    timestamps: false,
    paranoid: false
})
export class Usuario extends Model{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id_usuario: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    nombre: string;
    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    apellido_paterno: string;
    @Column({
        type: DataType.STRING(50),
        allowNull: false
    })
    apellido_materno: string;
    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    correo: string;
    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    contrasenia: string;
    @Column({
        type: DataType.STRING(40),
        allowNull: false
    })
    telefono: string;
    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    direccion: string;
    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    fecha_creacion: Date;
    @Column({
        type: DataType.STRING(15),
        allowNull: false
    })
    puesto: string;
    @Column({
        type: DataType.STRING(10),
        allowNull: false
    })
    estatus: string;

    @HasMany(() => Pedido)
    pedidos: Pedido[];

}
