import { Project } from "./src/entities/project";
import { User } from "./src/entities/user";

export default {
    type: "postgres",
    host: process.env.TYPEORM_HOST || "localhost",
    port: process.env.TYPEORM_PORT ? parseInt(process.env.TYPEORM_PORT) : 5432,
    username: process.env.TYPEORM_USERNAME || "postgres",
    password: process.env.TYPEORM_PASSWORD || "postgres",
    database: process.env.TYPEORM_DATABASE_Name || "node_project",
    synchronize: false,
    logging: false,
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 2000,

    entities: ["./src/entities/*"],
    migrations: ["src/migrations/*"],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
    },
};
