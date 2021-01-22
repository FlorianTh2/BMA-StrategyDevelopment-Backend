import { install_typeorm } from "./typeorm";

export async function install_packages(app: Express.Application) {
    console.log("start installing packages");

    await install_typeorm(app);
}
