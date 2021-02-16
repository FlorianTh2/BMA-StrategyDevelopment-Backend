import { install_typeorm } from "./typeorm";
import { install_apolloServer } from "./apolloServer";
import { ApolloServer } from "apollo-server";

export async function install_packages(): Promise<ApolloServer> {
    console.log("start installing packages");

    await install_typeorm();

    let app: ApolloServer = await install_apolloServer();
    return app;
}
