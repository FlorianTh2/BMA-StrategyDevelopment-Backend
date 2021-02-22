import { ApolloServer } from "apollo-server";
import { resolvers } from "../resolvers";
import { readFileSync } from "fs";
import { getManager } from "typeorm";
import { createDataloaders } from "../dataLoaders";
import { verifyToken } from "../utils/authorization/authorization";
import { makeExecutableSchema } from "graphql-tools";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "../shield/shield";

// this separation from only the presentation/view/interface layer (=only apollo-server-resolver layer) to
//  a interface layer + business-logic layer is not further continued since in that case we had to introduce
//  something like a DI- (Dependency-Injection) Mechanism
//  -> maybe this would be a better approach to get smaller and lighter resolver-function but here i tried to stick
//      to basic- / simple approaches
//
// context: ({ req, res }) => {
//     const dataLoader = createUserLoaderByProjectId();
//     const dataContext = getManager();
//     return {
//         req,
//         res,
//         // projectService: createProjectService(dataContext),
//     };
// },

export async function install_apolloServer() {
    const app: ApolloServer = new ApolloServer({
        schema: applyMiddleware(
            makeExecutableSchema({
                typeDefs: readFileSync("./src/schema/schema.graphql").toString("utf-8"),
                resolvers: resolvers,
            }),
            permissions,
        ),
        playground: true,
        introspection: true,
        context: ({ req, res }) => {
            return {
                req,
                res,
                userId: verifyToken(req?.headers?.authorization),
                dataLoaders: createDataloaders(),
                typeormManager: getManager(),
            };
        },
    });
    return app;
}
