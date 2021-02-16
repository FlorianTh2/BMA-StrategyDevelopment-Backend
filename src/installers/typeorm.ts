import { createConnection } from "typeorm";
import { ConnectionOptions } from "typeorm";

export async function install_typeorm() {
    // npm run typeorm migration:generate -- -n migrationName
    // npm run typeorm migration:run
    createConnection()
        .then((connection) => {})
        .catch((error) => console.log(error));
}
