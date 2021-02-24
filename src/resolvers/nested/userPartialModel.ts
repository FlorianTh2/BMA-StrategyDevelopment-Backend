import { ApolloContext } from "../../types/apolloContext";
import { UserMaturityModel } from "../../database/entities/userMaturityModel";
import { UserPartialModel as UserPartialModelEntity } from "../../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../../database/entities/userEvaluationMetric";
import { PartialModel } from "../../database/entities/partialModel";

export const UserPartialModel = {
    userMaturityModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userPartialModelId = parent.id;

        // resolver business logic
        const dbResult: UserMaturityModel = await context.dataLoaders.userMaturityModel.loaderByUserPartialModelId.load(
            userPartialModelId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },

    superUserPartialModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const subUserPartialModelId = parent.id;

        // resolver business logic
        const dbResult: UserPartialModelEntity = await context.dataLoaders.userPartialModel.loaderBySubUserPartialModelId.load(
            subUserPartialModelId,
        );

        // resolver return
        const resolverResult = dbResult ? { ...dbResult } : null;
        return resolverResult;
    },

    subUserPartialModels: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const superUserPartialModelId = parent.id;

        // resolver business logic
        const dbResult: UserPartialModelEntity[] = await context.dataLoaders.userPartialModel.loaderBySuperUserPartialModelId.load(
            superUserPartialModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },

    userEvaluationMetrics: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userPartialModelId = parent.id;

        // resolver business logic
        const dbResult: UserEvaluationMetric[] = await context.dataLoaders.userEvaluationMetric.loaderByUserPartialModelId.load(
            userPartialModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },

    partialModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userPartialModelId = parent.id;

        // resolver business logic
        const dbResult: PartialModel = await context.dataLoaders.partialModel.loaderByUserPartialModelId.load(
            userPartialModelId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
};
