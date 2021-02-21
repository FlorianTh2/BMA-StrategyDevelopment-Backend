import { Project } from "../database/entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../database/entities/userPartialModel";
import { UserEvaluationMetric } from "../database/entities/userEvaluationMetric";
import { PartialModel } from "../database/entities/partialModel";

export const partialModelQuery = {
    async partialModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(PartialModel).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async partialModels(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(PartialModel).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userPartialModelMutation = {};
