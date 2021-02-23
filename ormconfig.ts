import { Project } from "./src/database/entities/project";
import { User } from "./src/database/entities/user";

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

    entities: ["./src/database/entities/*"],
    migrations: ["src/database/migrations/*"],
    seeds: ["src/seeding/seeds/**/*{.ts,.js}"],
    factories: ["src/seeding/factories/**/*{.ts,.js}"],
    cli: {
        entitiesDir: "src/database/entities",
        migrationsDir: "src/database/migrations",
    },
};
