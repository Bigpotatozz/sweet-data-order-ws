import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Usuario } from 'src/usuario/entities/usuario.entity';


export const databaseProviders = [{
    provide: 'SEQUELIZE',    
    inject: [ConfigService],
    useFactory: async(configService: ConfigService) => {


        console.log(configService.get('USERNAME'));
        const sequelize = new Sequelize({
            dialect: configService.get('DIALECT'),
            host: configService.get('HOST'),
            port: configService.get('PORT') || 5432,
            username: configService.get('USER'),
            password: configService.get('PASSWORD'),
            database: configService.get('DATABASE'),
        });

        sequelize.addModels([Usuario]);
        await sequelize.sync();
        return sequelize;
    }

}]