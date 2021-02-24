import { createUserLoaderByProjectId } from "../dataLoaders/user/createUserLoaderByProjectId";
import { createProjectLoaderByUserId } from "../dataLoaders/project/createProjectLoaderByUserId";
import { createProjectLoaderByUserMaturityModelId } from "../dataLoaders/project/createProjectLoaderByUserMaturityModelId";
import { createUserPartialModelLoaderByUserMaturityModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByUserMaturityModelId";
import { createUserMaturityModelLoaderByUserPartialModelId } from "../dataLoaders/userMaturityModel/createUserMaturityModelLoaderByUserPartialModelId";
import { createUserMaturityModelLoaderByProjectId } from "../dataLoaders/userMaturityModel/createUserMaturityModelLoaderByProjectId";
import { createUserPartialModelLoaderBySuperUserPartialModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderBySuperUserPartialModelId";
import { createUserPartialModelLoaderBySubUserPartialModelId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderBySubUserPartialModelId";
import { createUserEvaluationMetricLoaderByUserPartialModelId } from "../dataLoaders/userEvaluationMetric/createUserEvaluationMetricLoaderByUserPartialModelId";
import { createPartialModelLoaderBySuperPartialModelId } from "../dataLoaders/partialModel/createPartialModelLoaderBySuperUserPartialModelId";
import { createPartialModelLoaderBySubPartialModelId } from "../dataLoaders/partialModel/createPartialModelLoaderBySubPartialModelId";
import { createPartialModelLoaderByUserPartialModelId } from "../dataLoaders/partialModel/createPartialModelLoaderByUserPartialModelId";
import { createEvaluationMetricLoaderByPartialModelId } from "../dataLoaders/evaluationMetric/createEvaluationMetricLoaderByPartialModelId";
import { createPartialModelLoaderByEvaluationMetricId } from "../dataLoaders/partialModel/createPartialModelLoaderByEvaluationMetricId";
import { createUserPartialModelLoaderByUserEvaluationMetricId } from "../dataLoaders/userPartialModel/createUserPartialModelLoaderByUserEvaluationMetricId";
import { createEvaluationMetricLoaderByUserEvaluationMetricId } from "../dataLoaders/evaluationMetric/createEvaluationMetricLoaderByUserEvaluationMetricId";

export interface Dataloaders {
    project: {
        loaderByUserId: ReturnType<typeof createProjectLoaderByUserId>;
        loaderByMaturityModelId: ReturnType<typeof createProjectLoaderByUserMaturityModelId>;
    };
    user: {
        loaderByProjectId: ReturnType<typeof createUserLoaderByProjectId>;
    };
    userMaturityModel: {
        loaderByUserPartialModelId: ReturnType<typeof createUserMaturityModelLoaderByUserPartialModelId>;
        loaderByProjectId: ReturnType<typeof createUserMaturityModelLoaderByProjectId>;
    };
    userPartialModel: {
        loaderByMaturityModelId: ReturnType<typeof createUserPartialModelLoaderByUserMaturityModelId>;
        loaderBySubUserPartialModelId: ReturnType<typeof createUserPartialModelLoaderBySubUserPartialModelId>;
        loaderBySuperUserPartialModelId: ReturnType<typeof createUserPartialModelLoaderBySuperUserPartialModelId>;
        loaderByUserEvaluationMetric: ReturnType<typeof createUserPartialModelLoaderByUserEvaluationMetricId>;
    };
    userEvaluationMetric: {
        loaderByUserPartialModelId: ReturnType<typeof createUserEvaluationMetricLoaderByUserPartialModelId>;
    };
    partialModel: {
        loaderByUserPartialModelId: ReturnType<typeof createPartialModelLoaderByUserPartialModelId>;
        loaderBySubPartialModelId: ReturnType<typeof createPartialModelLoaderBySubPartialModelId>;
        loaderBySuperPartialModelId: ReturnType<typeof createPartialModelLoaderBySuperPartialModelId>;
        loaderByEvaluationMetricId: ReturnType<typeof createPartialModelLoaderByEvaluationMetricId>;
    };
    evaluationMetric: {
        loaderByPartialModelId: ReturnType<typeof createEvaluationMetricLoaderByPartialModelId>;
        loaderByUserEvaluationMetricId: ReturnType<typeof createEvaluationMetricLoaderByUserEvaluationMetricId>;
    };
}
