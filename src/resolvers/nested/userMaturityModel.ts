import { ApolloContext } from "../../types/apolloContext";
import { User } from "../../database/entities/user";
import { Project } from "../../database/entities/project";
import { UserPartialModel } from "../../database/entities/userPartialModel";

export const UserMaturityModel = {
    projects: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userMaturityModelId = parent.id;

        // resolver business logic
        const dbResult: Project[] = await context.dataLoaders.project.loaderByUserMaturityModelId.load(
            userMaturityModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },

    userPartialModels: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userMaturityModelId = parent.id;

        // resolver business logic
        const dbResult: UserPartialModel[] = await context.dataLoaders.userPartialModel.loaderByUserMaturityModelId.load(
            userMaturityModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};
