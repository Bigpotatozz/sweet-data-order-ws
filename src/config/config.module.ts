import { Module } from '@nestjs/common';
import { databaseProviders } from './db.providers';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[ConfigModule],
    controllers:[],
    providers:[...databaseProviders]
})
export class ConfigBD {}
