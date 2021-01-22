import { createConnection } from "typeorm";
import path from "path";
import ORMConfig from "../ormconfig";

export async function install_typeorm(app: Express.Application) {
    const connection = await createConnection(ORMConfig);
}
