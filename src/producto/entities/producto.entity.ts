import { Column, DataType, Table, Model } from "sequelize-typescript";

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
}
