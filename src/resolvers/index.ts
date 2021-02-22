import { projectMutation, projectQuery } from "./project.resolver";
import { userMutation, userQuery } from "./user.resolver";
import { User } from "./nested/user";
import { Project } from "./nested/project";
import { userPartialModelQuery } from "./userPartialModel.resolver";
import { maturityModelQuery } from "./maturityModel.resolver";
import { userEvaluationMetricQuery } from "./userEvaluationMetric.resolver";
import { partialModelQuery } from "./partialModel.resolver";
import { evaluationMetricQuery } from "./evaluationMetric.resolver";
import { MaturityModel } from "./nested/maturityModel";
import { UserPartialModel } from "./nested/userPartialModel";
import { PartialModel } from "./nested/partialModel";
import { EvaluationMetric } from "./nested/evaluationMetric";
import { UserEvaluationMetric } from "./nested/userEvaluationMetric";

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
    UserPartialModel,
    PartialModel,
    EvaluationMetric,
    UserEvaluationMetric,
};

const Mutation = {
    ...userMutation,
};

export const resolvers = {
    Query: Query,
    Mutation: Mutation,
    ...NestedFields,
};
