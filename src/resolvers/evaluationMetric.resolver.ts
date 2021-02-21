import { Project } from "../database/entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../database/entities/userEvaluationMetric";
import { PartialModel } from "../database/entities/partialModel";
import { EvaluationMetric } from "../database/entities/evaluationMetric";

export const evaluationMetricQuery = {
    async evaluationMetric(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(EvaluationMetric).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async evaluationMetrics(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(EvaluationMetric).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userPartialModelMutation = {};
