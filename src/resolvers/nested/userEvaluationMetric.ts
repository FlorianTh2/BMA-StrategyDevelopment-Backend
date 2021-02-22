import { ApolloContext } from "../../types/apolloContext";
import { UserPartialModel } from "../../database/entities/userPartialModel";
import { EvaluationMetric } from "../../database/entities/evaluationMetric";

export const UserEvaluationMetric = {
    userPartialModel: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userEvaluationMetricId = parent.id;

        // resolver business logic
        const dbResult: UserPartialModel = await context.dataLoaders.userPartialModel.loaderByUserEvaluationMetric.load(
            userEvaluationMetricId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },

    evaluationMetric: async (parent, _args, context: ApolloContext, info) => {
        // resolver input
        const userEvaluationMetricId = parent.id;

        // resolver business logic
        const dbResult: EvaluationMetric = await context.dataLoaders.evaluationMetric.loaderByUserEvaluationMetricId.load(
            userEvaluationMetricId,
        );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
};
