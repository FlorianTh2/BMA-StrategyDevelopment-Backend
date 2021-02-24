import { Project } from "../database/entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";
import { UserPartialModel } from "../database/entities/userPartialModel";
import { UserMaturityModel } from "../database/entities/userMaturityModel";
import { AuthenticationError } from "apollo-server-errors";

export const maturityModelQuery = {
    async userMaturityModel(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(UserMaturityModel).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async userMaturityModels(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(UserMaturityModel).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
    async userMaturityModelOfUser(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(UserMaturityModel)
            .findOne({ where: { id: id, creator: context.user.id } });
        if (!dbResult)
            throw new AuthenticationError(
                "UserMaturityModel was not found. Check if this userMaturityModel was created by you!",
            );

        // resolver return
        const resolverResult = { ...dbResult };
        return resolverResult;
    },
    async userMaturityModelsOfUser(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(UserMaturityModel)
            .find({ where: { creator: context.user.id } });

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const userPartialModelMutation = {};
