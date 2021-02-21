import { ApolloContext } from "../../types/apolloContext";
import { User } from "../../database/entities/user";
import { Project } from "../../database/entities/project";

export const MaturityModel = {
    projects: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const maturityModelId = parent.id;

        // resolver business logic
        const dbResult: Project[] = await context.dataLoaders.project.loaderByMaturityModelId.load(maturityModelId);

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },

    // userPartialModels: async (parent, _args, context: ApolloContext, info) => {
    //     // resolver input
    //     const maturityModelId = parent.id;
    //
    //     // resolver business logic
    //     const dbResult: Project[] = await context.dataLoaders.userPartialModel.loaderByMaturityModelId.load(maturityModelId);
    //
    //     // resolver return
    //     const resolverResult = [...dbResult];
    //     return resolverResult;
    // },
};
