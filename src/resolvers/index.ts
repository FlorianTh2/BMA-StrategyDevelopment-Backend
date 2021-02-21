import { projectMutation, projectQuery } from "./project.resolver";
import { userQuery } from "./user.resolver";
import { User } from "./nested/user";
import { Project } from "./nested/project";
import { userPartialModelQuery } from "./userPartialModel.resolver";
import { maturityModelQuery } from "./maturityModel.resolver";

const Query = {
    ...projectQuery,
    ...userQuery,
    ...maturityModelQuery,
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
