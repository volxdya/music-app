import {SequelizeModuleOptions} from "@nestjs/sequelize";

import * as dotenv from "dotenv";

dotenv.config();

export const DB_CONFIG: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadModels: true,
    models: [],
}