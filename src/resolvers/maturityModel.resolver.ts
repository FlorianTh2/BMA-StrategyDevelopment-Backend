import { ApolloContext } from "../types/apolloContext";
import { MaturityModel } from "../database/entities/maturityModel";

export const maturityModelQuery = {
    async maturityModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        // load full maturityModel

        const dbResult = await context.typeormManager.getRepository(MaturityModel).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
};

export const maturityModelMutation = {};
