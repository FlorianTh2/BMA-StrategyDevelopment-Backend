import { createConnection } from "typeorm";

export async function install_typeorm(app: Express.Application) {
    // npm run typeorm migration:generate -- -n migrationName
    // npm run typeorm migration:run
    createConnection()
        .then((connection) => {})
        .catch((error) => console.log(error));
}
