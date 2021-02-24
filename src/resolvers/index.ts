import { projectMutation, projectQuery } from "./project.resolver";
import { userMutation, userQuery } from "./user.resolver";
import { User } from "./nested/user";
import { Project } from "./nested/project";
import { userPartialModelQuery } from "./userPartialModel.resolver";
import { userMaturityModelQuery } from "./userMaturityModel.resolver";
import { userEvaluationMetricQuery } from "./userEvaluationMetric.resolver";
import { partialModelQuery } from "./partialModel.resolver";
import { evaluationMetricQuery } from "./evaluationMetric.resolver";
import { UserMaturityModel } from "./nested/userMaturityModel";
import { UserPartialModel } from "./nested/userPartialModel";
import { PartialModel } from "./nested/partialModel";
import { EvaluationMetric } from "./nested/evaluationMetric";
import { UserEvaluationMetric } from "./nested/userEvaluationMetric";
import { maturityModelQuery } from "./maturityModel.resolver";
import { MaturityModel } from "./nested/maturityModel";

const Query = {
    ...projectQuery,
    ...userQuery,
    ...userMaturityModelQuery,
    ...userPartialModelQuery,
    ...userEvaluationMetricQuery,
    ...partialModelQuery,
    ...evaluationMetricQuery,
    ...maturityModelQuery,
};

const NestedFields = {
    User,
    Project,
    UserMaturityModel,
    UserPartialModel,
    PartialModel,
    EvaluationMetric,
    UserEvaluationMetric,
    MaturityModel,
};

const Mutation = {
    ...userMutation,
};

export const resolvers = {
    Query: Query,
    Mutation: Mutation,
    ...NestedFields,
};
