import { Project } from "../database/entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";
import { AuthenticationError } from "apollo-server-errors";

export const projectQuery = {
    async project(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(Project).findOne({ where: { id: id } });

        // resolver return
        const resolverResult = { ...dbResult };
        console.log(resolverResult);
        return resolverResult;
    },
    async projects(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager.getRepository(Project).find();

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },

    async projectOfUser(parent, args, context: ApolloContext, info) {
        // resolver input
        const id = args.id;

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(Project)
            .findOne({ where: { id: id, creator: context.user.id } });
        if (!dbResult)
            throw new AuthenticationError("Project was not found. Check if this project was created by you!");

        // resolver return
        const resolverResult = { ...dbResult };
        console.log(resolverResult);
        return resolverResult;
    },
    async projectsOfUser(parent, args, context: ApolloContext, info) {
        // resolver input

        // resolver business logic
        const dbResult = await context.typeormManager
            .getRepository(Project)
            .find({ where: { creator: context.user.id } });

        // resolver return
        const resolverResult = [...dbResult];
        return resolverResult;
    },
};

export const projectMutation = {};
