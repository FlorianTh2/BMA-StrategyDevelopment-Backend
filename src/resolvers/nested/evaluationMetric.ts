import { ApolloContext } from "../../types/apolloContext";
import { PartialModel, PartialModel as PartialModelEntity } from "../../database/entities/partialModel";

export const EvaluationMetric = {
    partialModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const evaluationMetricId = parent.id;

        // resolver business logic
        const dbResult: PartialModel = await context.dataLoaders.partialModel.loaderByEvaluationMetricId.load(
            evaluationMetricId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
};
