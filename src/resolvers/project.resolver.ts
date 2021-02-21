import { Project } from "../entities/project";
import { ApolloContext } from "../types/apolloContext";
import { getRepository } from "typeorm";

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
};

export const projectMutation = {};
