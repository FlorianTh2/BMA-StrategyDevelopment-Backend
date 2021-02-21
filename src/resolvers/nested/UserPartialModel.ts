import { ApolloContext } from "../../types/apolloContext";
import { Project } from "../../database/entities/project";
import { MaturityModel } from "../../database/entities/maturityModel";
import { UserPartialModel as UserPartialModelEntity } from "../../database/entities/userPartialModel";

export const UserPartialModel = {
    maturityModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userPartialModelId = parent.id;

        // resolver business logic
        const dbResult: MaturityModel = await context.dataLoaders.maturityModel.loaderByUserPartialModelId.load(
            userPartialModelId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },

    superUserPartialModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userPartialModelId = parent.id;

        // resolver business logic
        const dbResult: UserPartialModelEntity = await context.dataLoaders.userPartialModel.loaderByUserPartialModelId.load(
            userPartialModelId,
        );

        // resolver return
        const resolverResult = dbResult ? { ...dbResult } : null;
        return resolverResult;
    },
};
