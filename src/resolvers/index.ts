import { projectMutation, projectQuery } from "./project.resolver";

const Query = {
    ...projectQuery(),
};

const Mutation = {};

export const resolvers = {
    Query: Query,
    Mutation: Mutation,
};
