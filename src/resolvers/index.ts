import { projectMutation, projectQuery } from "./project.resolver";
import { userQuery } from "./user.resolver";
import { User } from "./nested/user";
import { Project } from "./nested/project";
import { userPartialModelQuery } from "./userPartialModel.resolver";

const Query = {
    ...projectQuery,
    ...userQuery,
    ...userPartialModelQuery,
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
