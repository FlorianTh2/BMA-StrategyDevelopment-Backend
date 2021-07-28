import { ApolloContext } from "../../types/apolloContext";
import { User } from "../../database/entities/user";
import { Project } from "../../database/entities/project";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export const ConsistencyMatrix = {
    projects: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const consistencyMatrixId = parent.id;

        // resolver business logic

        // to implement
        const dbResult: Project[] = await context.dataLoaders.project.loaderByUserMaturityModelId.load(
            userMaturityModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};
