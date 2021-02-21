import { projectMutation, projectQuery } from "./project.resolver";
import { userQuery } from "./user.resolver";
import { User } from "./nested/user";
import { Project } from "./nested/project";
import { userPartialModelQuery } from "./userPartialModel.resolver";
import { maturityModelQuery } from "./maturityModel.resolver";
import { userEvaluationMetricQuery } from "./userEvaluationMetric.resolver";
import { partialModelQuery } from "./partialModel.resolver";
import { evaluationMetricQuery } from "./evaluationMetric.resolver";
import { MaturityModel } from "./nested/maturityModel";

const Query = {
    ...projectQuery,
    ...userQuery,
    ...maturityModelQuery,
    ...userPartialModelQuery,
    ...userEvaluationMetricQuery,
    ...partialModelQuery,
    ...evaluationMetricQuery,
};

const NestedFields = {
    User,
    Project,
    MaturityModel,
};

const Mutation = {};

export const resolvers = {
    Query: Query,
    Mutation: Mutation,
    ...NestedFields,
};
