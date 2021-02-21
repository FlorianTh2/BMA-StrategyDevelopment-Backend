import { projectMutation, projectQuery } from "./project.resolver";
import { userQuery } from "./user.resolver";
import { User } from "./nested/user";
import { Project } from "./nested/project";

const Query = {
    ...projectQuery,
    ...userQuery,
};

const NestedFields = {
    User,
    Project,
};

const Mutation = {};

export const resolvers = {
    Query: Query,
    Mutation: Mutation,
    ...NestedFields,
};
