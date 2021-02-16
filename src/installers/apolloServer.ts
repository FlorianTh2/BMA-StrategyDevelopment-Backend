import { ApolloServer } from "apollo-server";
import { schema } from "../schema/schema";
import { resolvers } from "../resolvers";

export async function install_apolloServer() {
    const app: ApolloServer = new ApolloServer({
        typeDefs: schema,
        resolvers: resolvers,
        playground: true,
        introspection: true,
    });
    return app;
}
