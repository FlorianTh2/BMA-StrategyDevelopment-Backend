import { ApolloServer } from "apollo-server";
import { resolvers } from "../resolvers";
import { readFileSync } from "fs";
import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { getManager } from "typeorm";
import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { ApolloContext } from "../types/apolloContext";
import { Dataloaders } from "../types/dataloaders";

export async function install_apolloServer() {
    const typedeeefs = importSchema("src/schema/schema.graphql");
    const schema1 = makeExecutableSchema({
        typeDefs: typedeeefs,
        resolvers: resolvers,
    });

    const app: ApolloServer = new ApolloServer({
        // typeDefs: readFileSync("./src/schema/schema.graphql").toString("utf-8"),
        // resolvers: resolvers,
        schema: schema1,
        playground: true,
        introspection: true,
        context: ({ req, res }) => {
            return {
                req,
                res,
                dataLoaders: {
                    project: {
                        loaderByUserId: createProjectLoaderByUserId(),
                    },
                    user: {
                        loaderByProjectId: createUserLoaderByProjectId(),
                    },
                } as Dataloaders,
                typeormManager: getManager(),
            };
        },
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
    });
    return app;
}
