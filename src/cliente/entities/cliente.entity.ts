import { DataTypes } from "sequelize";
import { Column, Table, Model } from "sequelize-typescript";

@Table({
    timestamps: false,
    paranoid: false,
    tableName: 'cliente'
})
export class Cliente extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    })
    id_cliente: number;
    @Column({
        type: DataTypes.STRING(50)
    })
    nombre: string;
    @Column({
        type: DataTypes.STRING(50)
    })
    apellido: string;
    @Column({
        type: DataTypes.STRING(100)
    })
    correo: string;
    @Column({
        type: DataTypes.STRING(40)
    })
    telefono: string;
    @Column({
        type: DataTypes.DATE
    })
    fecha_alta: Date;
    @Column({
        type: DataTypes.STRING(200)
    })
    direccion: string;
    @Column({
        type: DataTypes.STRING(100)
    })
    estado: string;
    @Column({
        type: DataTypes.STRING(100)
    })
    municipio: string;
    @Column({
        type: DataTypes.STRING(50)
    })
    puesto: string;
    @Column({
        type: DataTypes.DATE
    })
    ultima_visita: Date;
    @Column({
        type: DataTypes.STRING(10),
        defaultValue: 'AC'
    })
    estatus: string;
}
