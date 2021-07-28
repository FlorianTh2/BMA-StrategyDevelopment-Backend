import { ApolloContext } from "../../types/apolloContext";
import { User } from "../../database/entities/user";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { ConsistencyMatrix } from "../../database/entities/consistencyMatrix";

// called with queries like: query{projects{user{id}}}
export const Project = {
    user: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const projectId = parent.id;

        // resolver business logic

        // without dataloader:
        // const dbResult = await context.typeormManager
        //     .getRepository(ProjectEntity)
        //     .findOne({ where: { id: projectId }, relations: ["project"] });
        //

        // with dataloader
        const dbResult: User = await context.dataLoaders.user.loaderByProjectId.load(projectId);

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },

    userMaturityModels: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const projectId = parent.id;

        // resolver business logic
        const dbResult: UserMaturityModel[] = await context.dataLoaders.userMaturityModel.loaderByProjectId.load(
            projectId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
    consistencyMatrices: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const projectId = parent.id;

        // resolver business logic
        const dbResult: ConsistencyMatrix[] = await context.dataLoaders.consistencyMatrix.loaderByProjectId.load(
            projectId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};
