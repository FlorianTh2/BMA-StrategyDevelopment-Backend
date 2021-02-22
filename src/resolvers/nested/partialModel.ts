import { ApolloContext } from "../../types/apolloContext";
import { MaturityModel } from "../../database/entities/maturityModel";
import { PartialModel as PartialModelEntity } from "../../database/entities/partialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";

export const PartialModel = {
    subPartialModels: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const superPartialModelId = parent.id;

        // resolver business logic
        const dbResult: PartialModelEntity[] = await context.dataLoaders.partialModel.loaderBySuperPartialModelId.load(
            superPartialModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },

    superPartialModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const subPartialModelId = parent.id;

        // resolver business logic
        const dbResult: PartialModelEntity = await context.dataLoaders.partialModel.loaderBySubPartialModelId.load(
            subPartialModelId,
        );

        // resolver return
        const resolverResult = dbResult ? { ...dbResult } : null;
        return resolverResult;
    },

    evaluationMetrics: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const partialModelId = parent.id;

        // resolver business logic
        const dbResult: EvaluationMetric[] = await context.dataLoaders.evaluationMetric.loaderByPartialModelId.load(
            partialModelId,
        );

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};
