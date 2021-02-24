import { ApolloContext } from "../types/apolloContext";
import { UserEvaluationMetric } from "../database/entities/userEvaluationMetric";

export const userEvaluationMetricQuery = {
    async userEvaluationMetric(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(UserEvaluationMetric)
            .findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async userEvaluationMetrics(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(UserEvaluationMetric).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userPartialModelMutation = {};
