import { ApolloContext } from "../../types/apolloContext";
import { Project } from "../../database/entities/project";

export const ConsistencyMatrix = {
    projects: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const consistencyMatrixId = parent.id;

        // resolver business logic

        // to implement
        const dbResult: Project = await context.dataLoaders.project.loaderByConsistencyMatrixId.load(
            consistencyMatrixId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
};
