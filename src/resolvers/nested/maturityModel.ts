import { ApolloContext } from "../../types/apolloContext";
import { User } from "../../database/entities/user";
import { Project } from "../../database/entities/project";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { PartialModel } from "../../database/entities/partialModel";

export const MaturityModel = {
    partialModels: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const maturityModelId = parent.id;

        // resolver business logic
        const dbResult: PartialModel[] = await context.dataLoaders.partialModel.loaderByMaturityModelId.load(
            maturityModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};
