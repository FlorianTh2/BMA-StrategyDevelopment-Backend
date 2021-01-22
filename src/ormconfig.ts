import { ConnectionOptions } from "typeorm";
import * as path from "path";

const isCompiled = path.extname(__filename).includes("js");

export default {
    type: "postgres",
    host: process.env.TYPEORM_HOST || "localhost",
    port: process.env.TYPEORM_PORT ? parseInt(process.env.TYPEORM_PORT) : 5432,
    username: process.env.TYPEORM_USERNAME || "postgres",
    password: process.env.TYPEORM_PASSWORD || "postgres",
    database: process.env.TYPEORM_DATABASE_Name || "node_project",
    synchronize: !process.env.TYPEORM_SYNCHRONIZE,
    logging: !process.env.TYPEORM_LOGGING,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,
    entities: ["dist/entities/*.js"],
    migrations: ["dist/migrations/*.js"],
    cli: {
        entitiesDir: "**/entities",
        migrationsDir: "src/migrations",
    },
} as ConnectionOptions;
