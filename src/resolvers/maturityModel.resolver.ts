import { Project } from "../database/entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../database/entities/userPartialModel";
import { MaturityModel } from "../database/entities/maturityModel";
import { AuthenticationError } from "apollo-server-errors";

export const maturityModelQuery = {
    async maturityModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(MaturityModel).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async maturityModels(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(MaturityModel).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
    async maturityModelOfUser(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(MaturityModel)
            .findOne({ where: { id: id, creator: context.userId } });
        if (!dbResult)
            throw new AuthenticationError(
                "MaturityModel was not found. Check if this maturityModel was created by you!",
            );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async maturityModelsOfUser(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(MaturityModel)
            .find({ where: { creator: context.userId } });

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userPartialModelMutation = {};
