import { ApolloContext } from "../../types/apolloContext";
import { User } from "../../database/entities/user";
import { MaturityModel } from "../../database/entities/maturityModel";

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

    maturityModels: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const projectId = parent.id;

        // resolver business logic
        const dbResult: MaturityModel[] = await context.dataLoaders.maturityModel.loaderByProjectId.load(projectId);

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};
